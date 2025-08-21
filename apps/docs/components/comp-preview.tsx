import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Components } from "@/content/examples/index";
import { CopyIcon } from "lucide-react";

export function CompPreview({ name }: { name: string }) {
  const Preview = React.useMemo(() => {
    const Component = Components[name]?.component;

    if (!Component) {
      return <div>Not found!</div>;
    }

    return <Component />;
  }, [name]);

  return (
    <Card className="min-h-[20rem] outline-2 outline-offset-3 outline-zinc-700/20">
      <Tabs defaultValue="preview" className="w-full">
        {/* Header with TabsList */}
        <CardHeader className="flex justify-between items-center">
          <TabsList className="flex space-x-1 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="text-sm font-medium px-4 border-0 shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="text-sm font-medium px-4 border-0 shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>

          {/* Copy button on the right */}
          <CopyIcon size={15} className="cursor-pointer" />
        </CardHeader>

        {/* Main content area */}
        <CardContent className="flex justify-center items-center min-h-[15rem]">
          <TabsContent
            value="preview"
            className="w-full flex justify-center items-center"
          >
            <React.Suspense fallback={<p>Loading...</p>}>
              {Preview}
            </React.Suspense>
          </TabsContent>

          <TabsContent
            value="code"
            className="w-full flex justify-center items-center"
          >
            Code
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
}
