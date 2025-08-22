import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// const imageUrl = "https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const hikingUrl =
  "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function ExpPage() {
  return (
    <div className="flex flex-col min-h-screen gap-4 pt-4 max-w-xl px-2 mx-auto">
      <FirstSetOfComponents />
      <SecondSetOfComponents />
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

function FirstSetOfComponents() {
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

      <div className="relative w-50 h-60 outline-4 rounded-lg">
        <Image
          src={hikingUrl}
          fill
          alt="hiking-img"
          className="object-cover rounded-md mask-b-from-50%"
        />

        <div className="absolute flex flex-col gap-2 bottom-0 p-2 left-0 w-full">
          <h2 className="text-lg text-shadow-sm text-shadow-white">
            Hiking View
          </h2>
          <p className="text-xs line-clamp-2 text-shadow-sm text-shadow-gray-500/10">
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
