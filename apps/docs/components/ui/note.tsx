export const Note = ({ children }: {
	children: React.ReactNode
}) => {
	return (
		<div className="bg-[#253D3D]/33 text-md p-4 rounded-md border-l-8 border-teal-800/10 text-[#A0F4F4]/70">
			{children}
		</div>
	)
} 
