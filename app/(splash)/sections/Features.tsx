import Section from "@/components/Section";
import React from "react";
import { FaRegStar } from "react-icons/fa";

export const Features = () => {
  const features = [
    {
      title: "Stay ahead of the competition",
      description: "Provide the AI driven experience users expect",
      icon: FaRegStar,
    },
    {
      title: "Hands off assistance",
      description: "Save up to 50% on customer service costs",
      icon: FaRegStar,
    },
    {
      title: "One line of HTML",
      description: "Just copy and paste!",
      icon: FaRegStar,
    },
    {
      title: "Updates with your website",
      description: "WisePilot frequently updates its map of your website",
      icon: FaRegStar,
    },
  ];
  return (
    <Section id="features">
      <div className="py-24 px-4 mx-auto max-w-screen-xl lg:py-36 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-5xl font-normal text-gray-900 dark:text-white leading-tight">
            It only takes <b>one line of code</b>
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-light">
            Adding an AI assistant to your webpage has never been easier
          </p>
        </div>
        <hr className="my-16" />
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <feature.icon size={"24"} />
              </div>
              <h3 className="mb-2 text-xl font-normal dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
