"use client";

import Image from "next/image";

export const DoubleCard = () => {
  return (
    <div className="relative w-xl bg-white p-2 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-fit bg-neutral-100 p-2 rounded-2xl">
        <div className="flex flex-col gap-4 justify-between bg-transparent border border-gray-200/80 py-6 px-5 rounded-xl">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-lg text-neutral-400 tracking-wide font-medium">
                Shaped by your choices,
              </h1>
              <h1 className="text-lg text-neutral-700 font-semibold">
                Driven by Your Vision
              </h1>
            </div>

            <p className="text-xs text-neutral-500 tracking-wider">
              We will use that context when making future suggestions.
            </p>
          </div>

          <button className="w-fit text-[10px] tracking-widest text-white bg-neutral-800 hover:bg-neutral-800/95 h-9 px-4 rounded-full cursor-pointer">
            Train your AI
          </button>
        </div>

        <div className="relative py-6 px-5 rounded-xl text-neutral-800">
          <div className="aspect-square">
            <Image
              src="/dark-img.png"
              alt="ai-image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
