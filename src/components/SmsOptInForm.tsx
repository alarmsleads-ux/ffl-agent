import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const phoneRegex = /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").regex(phoneRegex, "Enter a valid US phone number"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email address").max(255),
  state: z.string().min(1, "Please select a state"),
  marketingConsent: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const SmsOptInForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      state: "",
      marketingConsent: false,
    },
  });

  const onSubmit = (_data: FormValues) => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle className="h-16 w-16 text-accent" />
        <h2 className="text-2xl font-bold text-foreground">Thank you!</h2>
        <p className="text-muted-foreground">We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(555) 555-5555" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {US_STATES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-8 pt-6 border-t border-border space-y-3">
          <FormField
            control={form.control}
            name="marketingConsent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                  />
                </FormControl>
                <Label
                  className="text-sm font-normal leading-snug cursor-pointer"
                  onClick={() => field.onChange(!field.value)}
                >
                  I agree to receive calls, SMS/MMS, and emails from Christopher Garness and CG Financial (optional).
                </Label>
              </FormItem>
            )}
          />

          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Opt-In:</strong> By checking this box, I provide my express written consent to
            receive telephone calls (including calls using an automatic telephone dialing system or
            an artificial or prerecorded voice) and recurring SMS/MMS text messages from{" "}
            <strong>Christopher Garness</strong> and <strong>CG Financial</strong> at the phone
            number provided above, including for marketing purposes. Consent is not required to
            receive a quote or book a call. Message and data rates may apply. Message frequency may
            vary. I may revoke this consent at any time by replying STOP to any message or by
            contacting us directly. Reply HELP for help. I have read and agree to the{" "}
            <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-accent">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms-and-conditions" className="underline underline-offset-2 hover:text-accent">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>

        <Button type="submit" variant="hero" size="xl" className="w-full">
          Get My Free Quote
        </Button>
      </form>
    </Form>
  );
};

export default SmsOptInForm;
