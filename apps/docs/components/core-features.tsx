"use client";

import { features } from "@/lib/constants";
import { RocketIcon } from "lucide-react";

export const CoreFeatures = () => {
  return (
    <div className="relative z-10 rounded-2xl pb-2 pt-6 md:py-10 xl:rounded-[28px] xl:py-12 bg-[linear-gradient(180deg,#1C1C1C_0%,#141414_100%)] dark:bg-[linear-gradient(180deg,#f9f9f9_0%,#eaeaea_100%)]">
      <div className="relative flex items-center md:justify-center gap-4 px-4">
        <div
          className="flex h-6 items-center gap-1.5 rounded-[9px] bg-white/[.02] dark:bg-black pl-1.5 pr-2.5 text-[0.65rem] text-gray-200 xl:h-6 xl:pl-2 xl:pr-3"
          style={{
            boxShadow:
              "0 0 0 1px rgba(0, 0, 0, .08), inset 0 1px 2px rgba(255, 255, 255, .12)",
          }}
        >
          <RocketIcon className="size-[10px]" />
          Core Features
        </div>
      </div>

      <div className="flex flex-col md:max-w-4xl mx-auto px-4">
        <div className="flex flex-col mt-4 gap-4 md:items-center md:gap-4 md:text-center">
          <h2 className="text-2xl font-semibold -tracking-[0.02em] text-primary-foreground">
            What&apos;s inside Pxui?
          </h2>
          <p className="max-w-[25rem] text-[0.75rem] text-gray-500 md:text-gray-400 tracking-wide">
            500+ <span>flexible</span> components with{" "}
            <span>developer-friendly</span>, comprehensive codebase for rapid
            development.
          </p>
        </div>

        <div className="relative mt-4 grid divide-y divide-white/[.08] border-t border-white/[.08] md:mt-12 md:grid-cols-2 md:gap-4 md:divide-y-0 md:border-0 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-3 py-4 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <IconComponent className="size-[0.95rem] shrink-0 text-[#F05023]" />
                <div className="md:mt-5 flx-1">
                  <div className="text-xs font-semibold text-primary-foreground">
                    {feature.title}
                  </div>
                  <div className="mt-1 w-full text-pretty text-xs text-gray-400 md:max-w-[10rem] md:text-[0.60rem]">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Grid lines for different breakpoints */}
          {/* MD breakpoint lines */}
          <div
            className="absolute top-0 h-full w-px left-1/2 hidden md:block xl:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
            }}
          />
          {[20, 40, 60, 80].map((percent) => (
            <div
              key={percent}
              className="absolute left-0 h-px w-full hidden md:block xl:hidden"
              style={{
                top: `${percent}%`,
                background:
                  "linear-gradient(90deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
              }}
            />
          ))}

          {/* XL breakpoint lines */}
          <div
            className="absolute top-0 h-full w-px left-1/3 hidden xl:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
            }}
          />
          <div
            className="absolute top-0 h-full w-px left-2/3 hidden xl:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
            }}
          />
          <div
            className="absolute left-0 h-px w-full top-1/3 hidden xl:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
            }}
          />
          <div
            className="absolute left-0 h-px w-full top-2/3 hidden xl:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(38, 38, 38, 0) 0%, #262626 32%, #262626 68%, rgba(38, 38, 38, 0) 100%)",
            }}
          />

          {/* Grid intersection dots for XL */}
          {(
            [
              [1 / 3, 1 / 3],
              [2 / 3, 1 / 3],
              [1 / 3, 2 / 3],
              [2 / 3, 2 / 3],
            ] as [number, number][]
          ).map(([left, top], index) => (
            <div
              key={index}
              className="absolute ring-[4px] ring-[#191919] dark:ring-gray-600 hidden -translate-x-1/2 -translate-y-1/2 xl:block w-[4px] h-[4px] bg-gray-600 dark:bg-gray-300"
              style={{
                left: `${left * 100}%`,
                top: `${top * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
