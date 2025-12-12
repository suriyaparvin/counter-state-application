import { Button } from "@/components/shadcnui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter State Application",
	description: "Basic page of Counter State Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-bold">
						Basic Counter App
					</CardTitle>
				</CardHeader>

				<CardContent className="text-center">
					<div className="pb-4">Counter Value: 0</div>
					<div className="grid grid-cols-2 gap-4 pt-4">
						<Button variant={"destructive"}>
							<CircleMinus /> Minus
						</Button>
						<Button variant={"outline"}>
							<CirclePlus /> Plus
						</Button>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
