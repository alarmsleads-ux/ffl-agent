import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { agentName, bio } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that generates realistic client testimonials for a life insurance agent. Return exactly 3 testimonials. Each should sound natural and authentic — like a real person wrote it. Keep quotes 1-2 sentences. Use first name and last initial format for names.",
          },
          {
            role: "user",
            content: `Generate 3 realistic client testimonials for a life insurance agent named ${agentName || "the agent"}. ${bio ? `Here's their bio: ${bio}` : ""}`,
          },
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "return_testimonials",
              description: "Return 3 generated testimonials",
              parameters: {
                type: "object",
                properties: {
                  testimonials: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        quote: { type: "string", description: "The testimonial quote" },
                        name: { type: "string", description: "Client name in 'First L.' format" },
                      },
                      required: ["quote", "name"],
                      additionalProperties: false,
                    },
                  },
                },
                required: ["testimonials"],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: "function", function: { name: "return_testimonials" } },
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Credits exhausted. Please add funds." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      throw new Error("AI gateway error");
    }

    const result = await response.json();
    const toolCall = result.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");

    const testimonials = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify(testimonials), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("generate-testimonials error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
