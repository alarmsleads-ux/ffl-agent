import React from "react";
import { Link } from "react-router-dom";
import SmsOptInForm from "@/components/SmsOptInForm";

const SmsOptIn: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get Your Free Life Insurance Quote
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Christopher Garness | CG Financial | Independent Insurance Agent
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
          <SmsOptInForm />
        </div>

        {/* Footer Links */}
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-accent transition-colors underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link to="/terms-and-conditions" className="hover:text-accent transition-colors underline-offset-4 hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmsOptIn;
