import Section, { SectionVariant } from "@/components/Section";
import { WiseLink } from "@/components/WiseLink";
import React from "react";

export const Hero = () => {
  return (
    <Section id="home" variant={SectionVariant.Secondary}>
      <div className="gap-40 py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 lg:py-36 lg:px-6 justify-items-center">
        <div className="flex flex-col justify-center items-center md:items-start font-light sm:text-lg">
          <h1 className="mb-4 text-6xl font-medium text-gray-900 dark:text-white leading-tight">
            Your website needs a copilot
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            WisePilot is an AI chatbot that helps users navigate your website.
          </p>
          <div className="flex gap-1 h-fit mt-10">
            <div className="flex flex-col">
              <input
                id="name"
                placeholder="Your website URL"
                className="w-52 md:w-80 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <WiseLink
              id="try-it-now"
              to="#build"
              className="flex flex-row items-center w-fit gap-2 whitespace-nowrap"
            >
              Try it now
            </WiseLink>
          </div>
          <p className="text-center text-gray-600 text-sm font-light">
            No Login Required
          </p>
        </div>
      </div>
    </Section>
  );
};
