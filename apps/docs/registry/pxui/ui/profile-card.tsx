"use client";

import Image from "next/image";
import { ZapIcon } from "lucide-react";

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${hours}:${minutes}${ampm}`;
}

const profileImage =
  "https://plus.unsplash.com/premium_photo-1738449258712-f1e6ad3d40e1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface ProfileCardProps {
  hireOnClick: () => void;
  copyEmailClick: () => void;
}

export default function ProfileCard({
  hireOnClick,
  copyEmailClick,
}: ProfileCardProps) {
  return (
    <div className="relative">
      <div className="relative z-10 bg-stone-950 rounded-[3rem] px-8 py-7 h-55 text-gray-200 shadow-sm shadow-white/10 inset-shadow-sm inset-shadow-white/5">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between text-sm">
            <p>Avaiable for work</p>
            {getCurrentTime()}
          </div>
          <div className="flex gap-4 items-center">
            <div className="relative h-12 w-12">
              <Image
                src={profileImage || ""}
                fill
                alt="profile_img"
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg">Ankit Mukhia</h1>
              <p className="text-sm leading-4">developer designer</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="w-full text-sm text-white bg-neutral-700 h-14 px-3.5 rounded-xl inset-shadow-xs inset-shadow-white/20 font-medium border border-black/4 outline-0 cursor-pointer"
              onClick={hireOnClick}
            >
              <span>Hire Me</span>
            </button>

            <button
              className="w-full text-sm text-white bg-neutral-900 h-14 px-3.5 rounded-xl inset-shadow-xs inset-shadow-white/20 font-medium border border-black/4 outline-0 cursor-pointer"
              onClick={copyEmailClick}
            >
              <span>Copy Email</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[18%] left-0 w-full h-[40%] bg-[#7d52fa] rounded-bl-[3rem] rounded-br-[3rem] shadow-lg dark:shadow-stone-700 shadow-stone-400">
        <div className="flex h-full flex-col justify-end items-center text-white p-2 text-sm tracking-wide font-medium">
          <div className="flex items-center gap-2">
            <ZapIcon size={15} /> Currently avaiable for Work
          </div>
        </div>
      </div>
    </div>
  );
}
