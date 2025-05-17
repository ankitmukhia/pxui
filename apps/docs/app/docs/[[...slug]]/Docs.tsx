import { Ui } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { mdxComponents } from '@/lib/mdx'

export const Docs = (ui: Ui) => {
	const MDXComponent = useMDXComponent(ui.body.code)

	return (
		<MDXComponent components={mdxComponents} />
	)
}
