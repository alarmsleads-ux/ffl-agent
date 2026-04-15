import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 sm:p-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Privacy Policy for CG Financial</h1>
          <p className="text-sm text-muted-foreground">Effective Date: April 15, 2026</p>
        </header>

        <p className="text-sm text-muted-foreground leading-relaxed">
          CG Financial ("we," "us," or "our"), operated by Christopher Garness, is committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard
          your personal information when you interact with us through our website, forms, phone,
          email, and SMS communications.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p className="text-sm text-muted-foreground">We collect personal information that you voluntarily provide, including:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Mailing address</li>
            <li>Date of birth</li>
            <li>Information related to your life insurance needs and inquiries</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p className="text-sm text-muted-foreground">We use your information to:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Provide life insurance quotes and policy information</li>
            <li>Schedule and confirm appointments</li>
            <li>Send transactional and customer service communications</li>
            <li>Send marketing and promotional communications (where consent is given)</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3. SMS Messaging &amp; A2P Compliance</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By providing your phone number and opting in, you consent to receive <strong>recurring automated marketing and informational text messages (SMS/MMS)</strong> from CG Financial. These may include appointment reminders, policy updates, quote follow-ups, and promotional offers.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Message frequency varies</li>
            <li>Message and data rates may apply</li>
            <li>To opt out at any time, reply <strong>STOP</strong></li>
            <li>
              For assistance, reply <strong>HELP</strong> or contact us at 909-775-6963 or{" "}
              <a href="mailto:chris@fflagent.com" className="underline underline-offset-2 hover:text-accent">
                chris@fflagent.com
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We obtain <strong>explicit consent</strong> before sending SMS messages, and consent
            records are maintained in accordance with applicable laws and carrier requirements.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use a third-party messaging platform, <strong>Twilio</strong>, to deliver SMS
            communications.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>
              No mobile opt-in data or consent will be shared with third parties or affiliates for
              marketing or promotional purposes.
            </strong>
            {" "}All the above categories exclude text messaging originator opt-in data and consent;
            this information will not be shared with any third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4. Phone &amp; Email Communications</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            By providing your contact information, you consent to receive phone calls (including
            autodialed and prerecorded calls) and emails regarding your inquiries, applications, and
            services.
          </p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>
              You may opt out of email communications at any time by clicking the “unsubscribe”
              link in any email
            </li>
            <li>You may also contact us directly to be removed from communications</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5. Information Sharing</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We do <strong>not</strong> sell, rent, or trade your personal information.
          </p>
          <p className="text-sm text-muted-foreground">We may share your information only in the following limited circumstances:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>With licensed insurance carriers to provide quotes and underwriting</li>
            <li>With service providers (such as Twilio) solely to facilitate communications</li>
            <li>With government or regulatory authorities when required by law</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6. Data Security</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We implement reasonable administrative, technical, and physical safeguards to protect
            your personal information from unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7. Your Privacy Rights (California Residents)</h2>
          <p className="text-sm text-muted-foreground">If you are a California resident, you have the right to:</p>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Request access to the personal information we collect about you</li>
            <li>Request deletion of your personal information</li>
            <li>Request information about how your data is used</li>
          </ul>
          <p className="text-sm text-muted-foreground">We do not sell your personal information.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            To exercise your rights, contact us at{" "}
            <a href="mailto:chris@fflagent.com" className="underline underline-offset-2 hover:text-accent">
              chris@fflagent.com
            </a>{" "}
            or 909-775-6963.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8. Changes to This Privacy Policy</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be reflected by
            updating the effective date above.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9. Contact Information</h2>
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>CG Financial</p>
            <p>Christopher Garness</p>
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

export default PrivacyPolicy;
