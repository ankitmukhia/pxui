import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-md font-bold underline">Pxui</h1>
      <Button className="p-4 border-2 bordr-gray-400 rounded-lg" appName="">
        Web App
      </Button>
    </div>
  );
}
