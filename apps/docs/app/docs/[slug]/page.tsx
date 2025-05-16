interface Params {
	params: Promise<{ slug: string }>
}

export default async function Page({ params }: Params) {
	const slug = (await params).slug

	return (
		<div>
			{slug.toString()}
		</div>
	)
}
