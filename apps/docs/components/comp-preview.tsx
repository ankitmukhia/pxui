import React from 'react'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { Card } from '@/components/ui/card'
import { Components } from '@/content/examples/index'
import { Separator } from '@/components/ui/separator'
import { CopyIcon } from 'lucide-react'

export function CompPreview({ name }: {
	name: string;
}) {
	const Preview = React.useMemo(() => {
		const Component = Components[name]?.component

		if (!Component) {
			return <div>
				Not found!
			</div>
		}

		return <Component />
	}, [Components, name])

	return (
		<Card>
			<Tabs defaultValue="preview" className="w-full">
				<div className="flex flex-col justify-center items-center space-y-6">
					<div className="flex w-full justify-end">
						<TabsList className="flex space-x-2 rounded-none bg-transparent">
							<TabsTrigger value="preview"
								className="relative rounded dark:bg-background/90 text-[10px] font-medium dark:data-[state=active]:bg-none px-4 border-0 shadow-none"
							>
								Preview
							</TabsTrigger>
							<TabsTrigger
								value="code"
								className="relative rounded dark:bg-background/90 text-[10px] font-medium dark:data-[state=active]:bg-none px-4 border-0 shadow-none"
							>
								Code
							</TabsTrigger>

							<Separator orientation="vertical" className="" />

							<CopyIcon size={15} />
						</TabsList>
					</div>
					<TabsContent value="preview" className="">
						<React.Suspense fallback={<p>
							Loading...
						</p>
						}>
							{Preview}
						</React.Suspense>
					</TabsContent>
					<TabsContent value="code">
						Code
					</TabsContent>
				</div>
			</Tabs>
		</Card>
	)
}
