import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Terms and Conditions for CG Financial</h1>
          <p className="text-sm text-muted-foreground">Effective Date: April 15, 2026</p>
        </header>

        <p className="text-sm text-muted-foreground leading-relaxed">
          These Terms and Conditions ("Terms") govern your access to and use of services provided by
          CG Financial ("we," "us," or "our"), operated by Christopher W Garness, including our
          website, forms, phone, email, and SMS communications. By accessing our website or
          submitting your information, you agree to these Terms.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By accessing this website, submitting any form, or otherwise communicating with us, you
            acknowledge that you have read, understood, and agree to be bound by these Terms. If you
            do not agree, please discontinue use of our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2. Services Provided</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            CG Financial and Christopher W Garness provide independent life insurance consulting
            services. We help individuals find and apply for life insurance products offered by
            licensed insurance carriers. We do not underwrite or issue insurance policies, and we do
            not guarantee approval for any insurance product.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3. SMS Communications</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By providing your phone number and consenting to SMS communications, you agree to
            receive recurring text messages including appointment reminders, insurance updates,
            policy information, quote follow-ups, and promotional offers from CG Financial.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Message frequency may vary</li>
            <li>Message and data rates may apply</li>
            <li>Reply <strong>STOP</strong> at any time to opt out</li>
            <li>Reply <strong>HELP</strong> for assistance</li>
            <li>Consent is not a condition of purchase</li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>
              No mobile opt-in data or consent will be shared with third parties or affiliates for
              marketing or promotional purposes.
            </strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4. Phone &amp; Email Communications</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By providing your contact information, you consent to receive phone calls (including
            autodialed and prerecorded calls) and emails regarding your inquiries, applications, and
            services. You may opt out of email communications at any time by clicking the
            "unsubscribe" link in any email or by contacting us directly to be removed from
            communications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. No Professional Advice</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information on this website is for general informational purposes only and does not
            constitute legal, financial, tax, or insurance advice. You should consult with a
            qualified professional before making any decisions based on the information provided.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            CG Financial and Christopher W Garness shall not be liable for any direct, indirect,
            incidental, consequential, or special damages arising from your use of this website or
            our services, to the fullest extent permitted by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7. Changes to These Terms</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We reserve the right to update or modify these Terms at any time. Any changes will be
            reflected by updating the effective date above. Your continued use of our services after
            changes are posted constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8. Contact Information</h2>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>CG Financial</p>
            <p>Christopher W Garness</p>
            <p>6768 Regal Park Dr</p>
            <p>Fontana, CA 92336</p>
            <p className="mt-2">Phone: 909-775-6963</p>
            <p>
              Email:{" "}
              <a href="mailto:chris@fflagent.com" className="underline underline-offset-2 hover:text-accent">
                chris@fflagent.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
