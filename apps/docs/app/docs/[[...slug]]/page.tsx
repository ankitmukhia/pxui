import { allUis } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Docs } from './Docs'

interface Params {
	params: Promise<{ slug: string[] }>
}

export default async function Page({ params }: Params) {
	const slug = (await params).slug?.join("/") ?? ""

	const ui = allUis.filter((f) => f.status === "published").find((f) => f.slug === slug)

	if (!ui) notFound()

	return <Docs {...ui} /> 
}
