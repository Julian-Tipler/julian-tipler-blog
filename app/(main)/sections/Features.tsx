import Section from "@/components/Section";
import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { RiChromeFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";

import { FaCcStripe } from "react-icons/fa";
import { IconType } from "react-icons";

export const Features = () => {
  const templates = [
    {
      title: "Next.js Webpage",
      description: "Includes SEO, Stripe payment, and OpenAI integration",
      icons: [
        "devicon-nextjs-plain",
        "devicon-react-plain",
        "devicon-supabase-plain",
      ],
    },
    {
      title: "Next.js Webpage",
      description: "Save up to 50% on customer service costs",
      icons: [
        "devicon-chrome-plain",
        "devicon-react-plain",
        "devicon-supabase-plain",
      ],
    },
  ];
  return (
    <Section id="templates">
      <div className="flex flex-col items-center justify-center py-24 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-5xl font-normal text-gray-900 dark:text-white leading-tight">
            Cut your dev time by <b>80%</b>
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-light">
            Let my templates do the heavy lifting for you.
          </p>
        </div>
        <hr className="my-12 border-gray-200 h-full w-full" />
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          {templates.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-200 rounded-lg p-4 max-w-72"
            >
              <div className="flex gap-2">
                {feature.icons.map((icon: string, i: number) => {
                  return (
                    <div
                      key={`icon-${i}`}
                      className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gray-300 lg:h-12 lg:w-12 dark:bg-primary-900"
                    >
                      <i className={`${icon} colored text-2xl`}></i>
                    </div>
                  );
                })}
              </div>

              <h3 className="mb-2 text-xl font-normal dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light text-wrap ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
