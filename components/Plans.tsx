"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Section from "@/components/Section";
import PlanCard, { Plan } from "@/components/PlanCard";

export const Plans = () => {
  const {
    isPending,
    error,
    data: plans,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: () => apiCall(),
  });

  if (isPending) return <div>loading...</div>;
  if (!plans || error) return <div>error fetching plans</div>;

  return (
    <Section id="pricing">
      <div className="py-8 px-4 lg:py-36 lg:px-6 flex flex-col items-center">
        <h2 className="text-5xl font-normal text-center mb-4">Pricing</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 font-light mb-20">
          Only pay for what you use.
        </p>
        <div className="items-center justify-center gap-6 flex flex-wrap">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const apiCall = async () => {
  return await new Promise<Plan[]>((resolve) => {
    setTimeout(() => {
      const response = plans;
      resolve(response);
    }, 1000);
  });
};

export const plans: Plan[] = [
  {
    name: "name",
    pricePerService: 1000,
    renewal: "time period",
    features: [
      { feature: "feature one", available: true },
      { feature: "feature two", available: true },
      { feature: "feature three", available: false },
      { feature: "feature four", available: false },
    ],
  },
];
