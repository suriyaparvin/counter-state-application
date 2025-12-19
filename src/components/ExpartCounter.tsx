"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { useState } from "react";

const ExpartCounter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		// count = count + 1;
		setCount(count + 1);
	};

	const minusOne = () => {
		// count = count - 1;
		setCount(count - 1);
	};

	const plusTen = () => {
		// count = count + 1;
		setCount(count + 10);
	};

	const minusTen = () => {
		// count = count + 1;
		setCount(count - 10);
	};

	return (
		<CardContent className="text-center">
			<div className="pb-4">Counter Value: {count}</div>
			<div className="grid grid-cols-2 gap-4 pt-4">
				<Button
					className="cursor-pointer"
					onClick={minusOne}
					variant={"destructive"}>
					<CircleMinusIcon /> Minus 1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusOne}>
					<CirclePlusIcon /> Plus 1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={minusTen}
					variant={"destructive"}>
					<CircleMinusIcon /> Minus 10
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusTen}>
					<CirclePlusIcon /> Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default ExpartCounter;
