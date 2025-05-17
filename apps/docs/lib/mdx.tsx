import { MDXComponents } from 'mdx/types'
import { Card } from '@/components/ui/card'

export const mdxComponents: MDXComponents = {
	Card,
	h1: (props: React.ComponentProps<"h1">) => (
		<h2
			className="text-4xl font-bold"
			{...props}
		/>
	),
	h2: (props: React.ComponentProps<"h2">) => (
		<h3
			className="text-xl font-bold"
			{...props}
		/>
	),
	p: (props: React.ComponentProps<"p">) => (
		<p
			className="text-md mt-4 text-sidebar-foreground"
			{...props}
		/>
	)
}
