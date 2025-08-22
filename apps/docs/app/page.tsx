import { ChevronRight, Download, Plus, CopyIcon } from "lucide-react";
import { FolderOpenIcon, FolderClosedIcon } from "@/lib/svg-icons";
import { fileStructure, codeString } from "@/lib/constants";
import { CoreFeatures } from "@/components/core-features";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { clsx } from "clsx";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen max-w-6xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-start mt-20 xl:items-center space-y-6">
          <h1 className="text-5xl font-medium -tracking-[0.022em]">
            Experiment. Learn. Use
          </h1>
          <p className="text-md text-start xl:text-center max-w-lg">
            A growing collection of components, patterns, and little ui
            experiments, i build and learn along the way.
          </p>

          <Link
            href="/docs"
            className="flex items-center justtify-center mt-4 text-[0.85rem] text-white bg-[#171717] dark:bg-[#fa7319] h-11 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 dark:border-white/10 outline-0"
          >
            Get Started - for free
            <ChevronRight size={18} />
          </Link>
        </div>

        <div className="mt-20">
          <div className="flex flex-col border-2 h-fit rounded-3xl">
            <div className="flex h-fit items-center justify-between p-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={clsx(`h-3 w-3 rounded-full`, {
                      "bg-[#ED6A5E]": index === 0,
                      "bg-[#F4BF4E]": index === 1,
                      "bg-[#61C655]": index === 2,
                    })}
                  />
                ))}
              </div>

              <div className="text-sm tracking-tight">pxui.com</div>

              <div className="flex gap-4 items-center">
                <Download size={18} className="text-foreground/15" />
                <Plus size={18} className="text-foreground/15" />
                <CopyIcon size={17} className="text-foreground/15" />
              </div>
            </div>

            <div className="flex-1 p-1">
              <div className="flex gap-4 h-fit w-full bg-zinc-300/20 dark:bg-accent/20 rounded-2xl p-4">
                <div className="flex flex-col gap-4 h-full text-sm">
                  {fileStructure.map((file, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-2">
                        {file.title === "actions" ? (
                          <FolderOpenIcon className="size-4" />
                        ) : (
                          <FolderClosedIcon className="size-4" />
                        )}
                        <span>{file.title}</span>
                      </div>

                      {file.file_items?.length ? (
                        <div
                          className={clsx(
                            `flex flex-col mt-3 border-l gap-3 ml-3 pl-4`,
                          )}
                        >
                          {file.file_items.map((item, _idx) => (
                            <span
                              key={_idx}
                              className={clsx(``, {
                                "bg-zinc-300/20 dark:bg-zinc-400/10 px-2 py-[0.1rem] rounded-sm":
                                  _idx === 0,
                              })}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto h-fit">
                  <CodeBlock>{codeString}</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 mb-30">
        <CoreFeatures />
      </div>
    </>
  );
}
