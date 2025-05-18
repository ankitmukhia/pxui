export const Card = ({ children }: {
	children: React.ReactNode
}) => {
	return (
		<div className="flex items-center justify-center p-4 rounded-md bg-green-400/40 bg-gradient-to-r from-[#161919] via-[#38555C] to-[#182123] border-2 border-border">
			{children}
		</div>
	)
}
