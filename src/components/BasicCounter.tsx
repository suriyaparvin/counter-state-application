"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const BasicCounter = () => {
	// let count = 10;

	const [count, setCount] = useState(0);

	const plus = () => {
		// count = count + 1;
		setCount(count + 1);
	};

	const minus = () => {
		// count = count - 1;
		setCount(count - 1);
	};

	return (
		<CardContent className="text-center">
			<div className="pb-4">Counter Value: {count}</div>
			<div className="grid grid-cols-2 gap-4 pt-4">
				<Button
					className="cursor-pointer"
					onClick={minus}
					variant={"destructive"}>
					<CircleMinusIcon /> Minus
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plus}
					variant={"outline"}>
					<CirclePlusIcon /> Plus
				</Button>
			</div>
		</CardContent>
	);
};

export default BasicCounter;
