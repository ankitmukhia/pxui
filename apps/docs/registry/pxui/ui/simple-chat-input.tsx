"use client";

import { useRef, useEffect, useState } from "react";
import { ImagePlusIcon, AudioLinesIcon, ArrowUpIcon } from "lucide-react";

export function SimpleChatInput() {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isSendActive, setIsSendActive] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className="relative bg-white rounded-3xl p-2 border shadow-sm dark:shadow-neutral-300">
      <textarea
        ref={inputRef}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (e.target.value.trim()) {
            setIsSendActive(true);
          } else {
            setIsSendActive(false);
          }
        }}
        placeholder="Message"
        spellCheck={false}
        className="resize-none min-h-12 max-h-40 px-3 py-2 text-black field-sizing-content placeholder:font-semibold placeholder:text-neutral-400 w-3xl outline-0 foucus:ring-0"
      />

      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 border bg-neutral-50 rounded-full py-[5px] px-3 text-neutral-500 font-semibold cursor-pointer">
          <ImagePlusIcon className="size-5" /> Attach Image
        </button>

        {isSendActive ? (
          <button className="flex items-center gap-2 border bg-neutral-100 rounded-full p-2 text-neutral-500 font-semibold inset-shadow-sm inset-shadow-white cursor-pointer">
            <ArrowUpIcon className="size-5" />
          </button>
        ) : (
          <button className="flex items-center gap-2 border bg-neutral-100 rounded-full py-[5px] px-3 text-neutral-500 font-semibold inset-shadow-sm inset-shadow-white cursor-pointer">
            <AudioLinesIcon className="size-5" /> Voice
          </button>
        )}
      </div>
    </form>
  );
}
