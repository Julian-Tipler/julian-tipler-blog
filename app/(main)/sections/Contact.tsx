import Section, { SectionVariant } from "@/components/Section";
import React from "react";
import { SUPPORT_EMAIL } from "../constants";
import { ContactForm } from "@/components/Contact";

export const Contact = () => {
  return (
    <Section id="contact" variant={SectionVariant.Secondary}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-normal leading-tight text-gray-900 dark:text-white">
            Talk to an engineer today
          </h2>
          <p className="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            We&apos;re here to help you get started with AI integration. Our
            team of engineers is ready to answer your questions and help you get
            started.
          </p>
          <p className="mb-10 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Use the form below to send us a message or email us at{" "}
            <a className="text-brand" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
