import { Card, CardContent } from "./card";
import { TextShimmer } from "@/components/text-shimmer";

export const Note = ({ children }: { children: string }) => {
  return (
    <Card className="relative outline-2 py-4 outline-offset-3 outline-zinc-700/20">
      <CardContent className="italic font-medium tracking-wide">
        <TextShimmer duration={4}>{children}</TextShimmer>
      </CardContent>
    </Card>
  );
};
