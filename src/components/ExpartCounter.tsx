"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { useState } from "react";

const ExpartCounter = () => {
	const [count, setCount] = useState(0);

	const plusOne = () => {
		if (count <= 99) {
			setCount(count + 1);
		}
	};

	const minusOne = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count >= 10) {
			setCount(count - 10);
		}
	};

	return (
		<CardContent className="text-center">
			<div className="pb-4">Counter Value: {count}</div>
			<div className="grid grid-cols-2 gap-4 pt-4">
				<Button
					className="cursor-pointer"
					onClick={minusOne}
					variant={"destructive"}
					disabled={count < 1}>
					<CircleMinusIcon /> Minus 1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusOne}
					disabled={count > 99}>
					<CirclePlusIcon /> Plus 1
				</Button>
				<Button
					className="cursor-pointer"
					onClick={minusTen}
					variant={"destructive"}
					disabled={count <= 9}>
					<CircleMinusIcon /> Minus 10
				</Button>
				<Button
					className="cursor-pointer"
					onClick={plusTen}
					disabled={count >= 91}>
					<CirclePlusIcon /> Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default ExpartCounter;
