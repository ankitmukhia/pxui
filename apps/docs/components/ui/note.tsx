import { InfoIcon } from "lucide-react";
import { Card, CardContent } from "./card";
import { CurvIcon } from "@/lib/svg-icons";

export const Note = ({ children }: { children: string }) => {
  return (
    <div className="relative">
      <div className="absolute -top-[15px] -left-[13px] z-10">
        <InfoIcon className="size-6 text-orange-300" />
      </div>

      <div className="absolute -top-1 -left-1">
        <CurvIcon className="size-[1.4rem] text-orange-300" />
      </div>

      <Card className="outline-2 py-4 outline-offset outline-orange-300 border-none bg-orange-200/10">
        <CardContent className="italic font-medium tracking-wide border-none text-orange-300 dark:text-orange-200">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};
