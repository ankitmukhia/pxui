"use client";

export default function Home() {
	/* 	const [height, setHeight] = useState(80); // closed height */

	/* const startY = useRef(0);
	const startHeight = useRef(0);
	const maxHeight = 500;  */

	/* const onStart = (e) => {
		startY.current = e.touches ? e.touches[0].clientY : e.clientY;
		startHeight.current = height;

		document.addEventListener("mousemove", onMove);
		document.addEventListener("mouseup", onEnd);

		document.addEventListener("touchmove", onMove);
		document.addEventListener("touchend", onEnd);
	};


	const onMove = (e) => {
		const y = e.touches ? e.touches[0].clientY : e.clientY;
		const diff = startY.current - y;

		let newHeight = startHeight.current + diff;
		newHeight = Math.max(80, Math.min(maxHeight, newHeight));

		setHeight(newHeight);
	};

	const onEnd = () => {
		document.removeEventListener("mousemove", onMove);
		document.removeEventListener("mouseup", onEnd);
		document.removeEventListener("touchmove", onMove);
		document.removeEventListener("touchend", onEnd);
	}; */

	return (
		<div>Something</div>
	);
}


/* <div className="fixed bottom-0 left-0 right-0 bg-white shadow-xl rounded-t-2xl transition-all"
	style={{ height }}
>

	<div
		className="w-12 h-2 bg-gray-400 rounded-full mx-auto my-3 cursor-pointer"
		onMouseDown={onStart}
		onTouchStart={onStart}

	/>

	<div className="p-4">
		<p>This is the drawer content...</p>
	</div>
</div> */

