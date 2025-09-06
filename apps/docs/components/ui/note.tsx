import { Card, CardContent } from "./card";

export const Note = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="outline-2 outline-offset-3 outline-zinc-700/20">
      <CardContent>{children}</CardContent>
    </Card>
  );
};
