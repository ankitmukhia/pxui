"use client";

import { useEffect, useState, useRef } from "react";
import {
  PlusIcon,
  AudioLinesIcon,
  PaperclipIcon,
  SendIcon,
} from "lucide-react";

export const GradientChatInput = () => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [isSendActive, setIsSendActive] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="bg-linear-to-r/longer from-pink-100 via-orange-100 to-orange-100 dark:from-purple-300 dark:via-blue-300 dark:to-blue-300 p-1 rounded-2xl shadow-2xl shadow-blue-200 dark:shadow-blue-200/60">
      <form className="bg-zinc-50 dark:bg-zinc-100 rounded-xl">
        <textarea
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (e.target.value.trim()) {
              setIsSendActive(true);
            } else {
              setIsSendActive(false);
            }
          }}
          placeholder="Ask anything"
          spellCheck={false}
          className="resize-none bg-transparent check text-black px-3 placeholder:text-gray-400/60 placeholder:font-medium field-sizing-content min-h-8 max-h-80 p-2 w-full border-none outline-0 focus:ring-0"
        />

        <div className="flex items-center justify-between px-2 pb-2">
          <div className="flex items-center gap-2">
            <button className="p-2 bg-zinc-50 rounded-lg border border-white shadow-sm cursor-pointer">
              <PaperclipIcon className="size-4 text-black" />
            </button>
            <button className="p-2 bg-zinc-50 rounded-lg border border-white shadow-sm cursor-pointer">
              <PlusIcon className="size-4 text-black" />
            </button>
          </div>

          {isSendActive ? (
            <button className="p-2 bg-zinc-50 rounded-lg border border-white shadow-sm cursor-pointer">
              <SendIcon className="size-4 text-black" />
            </button>
          ) : (
            <button className="p-2 bg-zinc-50 rounded-lg border border-white shadow-sm cursor-pointer">
              <AudioLinesIcon className="size-4 text-black" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
