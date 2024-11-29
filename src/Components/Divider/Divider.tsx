import { FC } from "react";

type DividerProps = {
	width: number;
	marginX?: string;
};

const Divider: FC<DividerProps> = ({ width, marginX }) => {
	return (
		<div
			className={`min-h-[1.5px] max-h-[1.5px] ${marginX}  my-4 bg-accent`}
			style={{
				minWidth: `${width}%`,
				maxWidth: `${width}%`,
				width: `${width}%`,
			}}
		></div>
	);
};

export default Divider;
