"use client";

export function ExampleBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border rounded-3xl border-neutral-200/10 overflow-hidden">
      <div className="absolute inset-x-0 z-100 flex flex-col gap-3 justify-center h-full p-4 text-white">
        {children}
      </div>
      <div className="relative h-fit w-[21rem] rounded-5xl">
        <img
          src="/dark-img.png"
          alt="ai-image"
          className="object-fill rounded-2xl mask-y-from-60%"
        />
      </div>
    </div>
  );
}
