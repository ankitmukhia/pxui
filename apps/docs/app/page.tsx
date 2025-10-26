"use client";

import { ChevronRight } from "lucide-react";
import { FolderOpenIcon, FolderClosedIcon } from "@/lib/svg-icons";
import { fileStructure, codeString } from "@/lib/constants";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { containerVariant, itemsVariants } from "@/lib/animations";
import { CodeBlock } from "@/components/code-block";
import { SlashButton } from "@repo/ui/slash-button";
import Link from "next/link";
import { clsx } from "clsx";

export default function Home() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="flex flex-col min-h-svh max-w-6xl mx-auto px-4 xl:px-0 my-4 md:my-0"
    >
      <motion.div
        variants={itemsVariants}
        className="flex flex-col items-start mt-2 md:mt-10 xl:items-center space-y-4"
      >
        <h1 className="text-5xl font-medium -tracking-[0.18rem]">
          Experiment. Learn. Use
        </h1>
        <p className="text-md text-start xl:text-center max-w-lg">
          A growing collection of components, patterns, and little ui
          experiments, i build and learn along the way.
        </p>

        <Link
          href="/docs"
          className="flex items-center justtify-center mt-4 text-[0.85rem] text-white bg-[#171717] hover:bg-[#171717]/90 dark:bg-[#fa7319] dark:hover:bg-[#fa7319]/90 h-11 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 dark:border-white/10 outline-0"
        >
          Get Started - for free
          <ChevronRight size={18} />
        </Link>
      </motion.div>

      <motion.div variants={itemsVariants} className="mt-10 xl:mt-10">
        <Tabs defaultValue="code">
          <div className="flex flex-col border-2 h-fit rounded-3xl">
            <div className="flex h-fit items-center justify-between px-4 py-2">
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

              <div className="text-sm tracking-wider">pxui.com</div>

              <TabsList className="h-7 rounded-full bg-zinc-300/20 dark:bg-zinc-300/5 shadow-none">
                <div className="flex items-center justify-center p-0">
                  <TabsTrigger
                    value="code"
                    className="flex w-16 py-1 bg-transparent cursor-pointer rounded-none rounded-tl-full rounded-bl-full text-xs data-[state=active]:border-none data-[state=active]:shadow-sm"
                  >
                    Code
                  </TabsTrigger>

                  <TabsTrigger
                    value="preview"
                    className="flex w-16 py-1 bg-transparent cursor-pointer rounded-none rounded-tr-full rounded-br-full text-xs data-[state=active]:border-none data-[state=active]:shadow-sm"
                  >
                    Preview
                  </TabsTrigger>
                </div>
              </TabsList>
            </div>

            <TabsContent value="code">
              <div className="flex-1 px-1 pb-1">
                <div className="flex gap-4 h-[39rem] w-full bg-zinc-300/20 dark:bg-accent/20 rounded-2xl p-4">
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
            </TabsContent>

            <TabsContent value="preview">
              <div className="flex-1 px-1 pb-1">
                <div className="flex items-center justify-center gap-4 h-[39rem] w-full bg-zinc-300/20 dark:bg-accent/20 rounded-2xl p-4">
                  <SlashButton>Hover me</SlashButton>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
