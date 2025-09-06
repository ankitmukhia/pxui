import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Components } from "@/content/examples/index";
import { CopyIcon } from "lucide-react";

export function CompPreview({
  children,
  name,
  variants,
  ...props
}: {
  children?: React.ReactNode;
  name: string;
  variants: string;
}) {
  const Preview = React.useMemo(() => {
    const Component = Components[name]?.component;

    if (!Component) {
      return (
        <div className="flex items-center justify-center text-sm gap-1 flex-wrap">
          Coming soon...
        </div>
      );
    }

    if (variants) {
      const varientsLists = variants.split(",");

      return (
        <div className="flex items-center justify-center gap-1 flex-wrap">
          {varientsLists.map((variant, idx) => {
            return (
              <Component key={idx} variant={variant} {...props}>
                {children}
              </Component>
            );
          })}
        </div>
      );
    }

    return <Component {...props}>{children}</Component>;
  }, [children, name, variants, props]);

  return (
    <Card className="min-h-[20rem] outline-2 outline-offset-3 outline-zinc-700/20">
      <Tabs defaultValue="preview" className="w-full">
        <CardHeader className="flex justify-between items-center">
          <TabsList className="flex space-x-1 bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:shadow-none data-[state=active]:bg-gray-100 text-sm font-medium px-4 border-0"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="data-[state=active]:shadow-none data-[state=active]:bg-gray-100 text-sm font-medium px-4 border-0"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <CopyIcon size={15} className="cursor-pointer" />
        </CardHeader>

        <CardContent className="flex justify-center items-center min-h-[18rem]">
          <TabsContent value="preview" className="">
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
