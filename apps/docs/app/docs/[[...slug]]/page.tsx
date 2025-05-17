import { allUis } from 'contentlayer/generated'
import { Docs } from './Docs'
import { notFound } from 'next/navigation'

interface Params {
	params: Promise<{ slug: string[] }>
}

export default async function Page({ params }: Params) {
	const slug = (await params).slug 

	if(!slug) notFound()

	const ui = allUis.filter((p) => p.status === "published").find((p) => p.slug === slug[0])

	if (!ui) notFound()

	return <Docs {...ui} /> 
}
