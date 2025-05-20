export const Note = ({ children }: {
	children: React.ReactNode
}) => {
	return (
		<div className="bg-active-bg text-md p-4 rounded-md border-l-8 border-active-bg text-active-text">
			{children}
		</div>
	)
} 
