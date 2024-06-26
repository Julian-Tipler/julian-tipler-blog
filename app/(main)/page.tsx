import Section, { SectionVariant } from "@/components/Section";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { TryIt } from "./sections/TryIt";
import { SUPPORT_EMAIL } from "./constants";
import { ContactForm } from "@/components/Contact";
import { Plans } from "../../components/Plans";

const Splash = () => {
  return (
    <>
      <Hero />
      <Features />
      <TryIt />
      <Section id="custom" variant={SectionVariant.Primary}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-36 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 lg:order-last">
            <h2 className="mb-4 text-5xl font-normal text-gray-900 dark:text-white">
              Find issues, <b>make money</b>
            </h2>
            <p className="mb-4 font-light">
              We&apos;ll pay you $5 <b>PER BUG!</b>
            </p>
            <h5>See terms and conditions</h5>
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
    </>
  );
};

export default Splash;
