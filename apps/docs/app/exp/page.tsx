import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ZapIcon } from "lucide-react";
import { SunIcon, MoonIcon } from "@/lib/svg-icons";

import { ModeToggle } from "@/components/ui/mode-toggle";

// const imageUrl = "https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const hikingUrl =
  "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const profileImage =
  "https://plus.unsplash.com/premium_photo-1738449258712-f1e6ad3d40e1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${hours}:${minutes}${ampm}`;
}

export default function ExpPage() {
  return (
    <div className="flex flex-col min-h-screen gap-4 pt-4 max-w-xl px-2 mx-auto">
      <ModeToggle />
      <SecondSetOfComponents />
      <ThirdSetOfComponents />
      <FourthSetOfComponents />
    </div>
  );
}

function FourthSetOfComponents() {
  return (
    <div className="relative bg-stone-950 rounded-[3rem] px-8 py-7 text-gray-200 shadow-sm shadow-white/10 inset-shadow-sm inset-shadow-white/5">
      <div className="relative">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between text-sm">
            <p>Avaiable for work</p>
            {getCurrentTime()}
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative h-12 w-12">
              <Image
                src={profileImage}
                fill
                alt="profile_img"
                className="object-cover rounded-full"
              />
            </div>
            <div className="">
              <h1 className="text-lg">Ankit Mukhia</h1>
              <p className="text-sm leading-4">developer designer</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="w-full text-sm text-white bg-neutral-700 h-14 px-3.5 rounded-xl inset-shadow-xs inset-shadow-white/20 font-medium border border-black/4 outline-0">
              <span>Hire Me</span>
            </button>

            <button className="w-full text-sm text-white bg-neutral-900 h-14 px-3.5 rounded-xl inset-shadow-xs inset-shadow-white/20 font-medium border border-black/4 outline-0">
              <span>Copy Email</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[18%] -z-10 left-0 w-full h-[40%] bg-[#7d52fa] rounded-bl-[3rem] rounded-br-[3rem] shadow-lg dark:shadow-stone-700 shadow-stone-400">
        <div className="flex h-full flex-col justify-end items-center p-2 text-sm tracking-wide font-medium">
          <div className="flex items-center gap-2">
            <ZapIcon size={15} /> Currently avaiable for Work
          </div>
        </div>
      </div>
    </div>
  );
}

function ThirdSetOfComponents() {
  return (
    <div className="flex justify-center gap-2">
      <div className="flex items-center justify-center h-8 w-8 border border-black/10 rounded-lg bg-zinc-400/10 inset-shadow-sm">
        <SunIcon className="size-4 text-gray-500" />
      </div>

      <div className="flex items-center justify-center h-8 w-8 border border-black/10 rounded-lg bg-zinc-400/10 inset-shadow-sm">
        <MoonIcon className="size-4 text-gray-500" />
      </div>
    </div>
  );
}

function SecondSetOfComponents() {
  return (
    <div className="flex flex-col w-full space-y-2">
      <button className="text-xs text-white bg-[#171717] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
      <button className="text-xs text-white bg-[#fa7319] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
      <button className="text-xs text-white bg-[#3356ff] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
      <button className="text-xs text-white bg-[#7d52fa] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
      <button className="text-xs text-white bg-[#12a557] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
      <button className="text-xs text-white bg-[#7b7b7b] h-10 px-3.5 rounded-xl inset-shadow-sm inset-shadow-white/60 font-medium border border-black/4 outline-0">
        <span>Reset Password</span>
      </button>
    </div>
  );
}

/* <div className="relative w-96 h-64 overflow-hidden">
	<img src={imageUrl} className="w-full h-full object-cover" />
	<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
</div> */

export function FirstSetOfComponents() {
  return (
    <>
      {/* <button className="border-1 shadow-xl backdrop-blur-md px-10 py-2 rounded-xl text-shadow-lg/40 text-shadow-white bg-orange-600 outline-2 outline-white/80 z-[1]">
				Get Started
			</button> */}
      <Link
        href="/docs"
        className="group flex hover:underline hover:underline-offset-4"
      >
        <span className="inline-flex items-baseline">Documentation</span>

        <ArrowUpRight className="h-4 self-center opacity-0 group-hover:opacity-100" />
      </Link>

      <div className="relative w-50 h-65 rounded-md">
        <Image
          src={hikingUrl}
          fill
          alt="hiking-img"
          className="object-cover rounded-md mask-b-from-40%"
        />

        <div className="absolute flex flex-col gap-2 bottom-0 p-2 left-0 w-full text-gray-800">
          <h2 className="text-[0.90rem]">Hiking View</h2>
          <p className="text-xs line-clamp-2">
            Glimps of todays hiking. Loved it show me good thing.
          </p>
        </div>
      </div>

      <div className="group relative p-4 border cursor-pointer border-gray-500/10 rounded-md overflow-hidden">
        <p className="group-hover:text-green-300 text-shadow-lg text-shadow-white/5">
          <span className="inline-flex items-baseline">
            Something is being cooked. Something is being cooked.
            {/* <Image
              src={imageUrl}
              alt="something"
              sizes="fill"
              className="size-5 self-center mx-1 rounded-full object-cover"
            /> */}
            <span>Ankit</span>
          </span>
          Something is being cooked. Something is being cooked.
        </p>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-green-200/10" />
      </div>

      <div className="flex items-center gap-2">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#00997E] px-8 py-3 font-medium text-[#FDFFF4] transition duration-300 hover:rotate-1 hover:scale-110 hover:shadow-lg hover:shadow-[#00997E]/50">
          <span className="relative z-10 transition-transform group-hover:scale-110">
            Hover me
          </span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </button>

        <button
          className={`
        relative
        px-8 py-3 
        rounded-lg
        text-white
				cursor-pointer
        font-medium 
        bg-gradient-to-b from-[#FF9366] to-[#F97316] 
        hover:shadow-orange-400
        transition-all 
				duration-200 
        transform 
				hover:scale-105
        border-2 
				border-white/40
        before:absolute
        before:inset-[-3px]
        before:-z-10
        before:rounded-lg
        before:bg-orange-400/80
        before:opacity-70
        before:blur-[3px]
        before:content-['']
      `}
        >
          Get Started (Free)
        </button>
      </div>
    </>
  );
}
