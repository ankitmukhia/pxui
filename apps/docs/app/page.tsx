import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Plus, CopyIcon } from "lucide-react";
import { FolderOpenIcon, FolderClosedIcon } from "@/lib/svg-icons";
import { CodeBlock } from "@/components/code-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { CoreFeatures } from "@/components/core-features"
import { clsx } from "clsx";

interface FileStructureType {
	title: string;
	file_items?: string[];
}

const fileStructure: FileStructureType[] = [
	{
		title: "actions",
		file_items: [
			"button.tsx",
			"button-group.tsx",
			"compact-button.tsx",
			"fancy-button.tsx",
			"social-button.tsx",
		],
	},
	{
		title: "form-elements",
	},
	{
		title: "indicators",
	},
	{
		title: "pickers",
	},
	{
		title: "overlay",
	},
	{
		title: "data-display",
	},
	{
		title: "navigation",
	},
	{
		title: "feedback",
	},
	{
		title: "panel",
	},
];

const codeString = `import * as Button from './components/button';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine
} from 'lucide-react';

export const Button = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <Button.Root variant='primary' mode='filled'>
        <Button.Icon as={RiArrowLeftSLine} />
          Learn More
        <Button.Icon as={RiArrowRightSLine} />
      </Button.Root>

      <Button.Root variant='primary' mode='filled'>
        <Button.Icon as={RiArrowLeftSLine} />
          Learn More
        <Button.Icon as={RiArrowRightSLine} />
      </Button.Root>
    </div>
  );
}
`;

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

					<Button className="flex items-center justtify-center mt-4">
						Get Started - <span className="">for free</span>
						<ChevronRight />
					  <ModeToggle />
					</Button>
				</div>

				<button className="group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none transition duration-200 ease-out focus:outline-none disabled:pointer-events-none disabled:text-text-disabled-300 disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden bg-primary-base text-static-white shadow-fancy-buttons-primary h-10 gap-3 rounded-10 px-3.5 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-static-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24]">Reset Password</button>

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
									<CodeBlock children={codeString} />
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
