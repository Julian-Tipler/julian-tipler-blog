import Section, { SectionVariant } from "@/components/Section";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { TryIt } from "./sections/TryIt";
import { SUPPORT_EMAIL } from "./constants";
import { ContactForm } from "@/components/Contact";
import { Plans } from "./sections/Plans";

const Splash = () => {
  return (
    <>
      <Hero />
      <Features />
      <TryIt />
      <Plans />
      <Section id="custom" variant={SectionVariant.Secondary}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:order-last">
            <h2 className="mb-4 text-5xl font-normal text-gray-900 dark:text-white">
              Need a custom solution?
            </h2>
            <p className="mb-4 font-light">
              We will work with you to build a custom AI solution that fits your
              exact business needs. We can set you up with the tools you need to
              get started and provide ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:order-first">
            <img
              className="w-full rounded-lg"
              src="https://gvewqhwcmnmdeyckkvlo.supabase.co/storage/v1/object/public/photos/priscilla-du-preez-nNMBa7Y1Ymk-unsplash.jpg"
              alt="Chatbot engineers"
              loading="lazy"
            />
            <img
              className="mt-4 w-full h-full rounded-lg lg:mt-10"
              src="https://gvewqhwcmnmdeyckkvlo.supabase.co/storage/v1/object/public/photos/olena-bohovyk-dIMJWLx1YbE-unsplash.jpg"
              alt="Chatbot engineers 2"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
      <Section id="contact">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl font-normal leading-tight text-gray-900 dark:text-white">
              Talk to an engineer today
            </h2>
            <p className="mb-2 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              We&apos;re here to help you get started with AI integration. Our
              team of engineers is ready to answer your questions and help you
              get started.
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
    </>
  );
};

export default Splash;
