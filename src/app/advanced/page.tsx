import AdvanceCounter from "@/components/AdvanceCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | Counter State Application",

	description: "Advance page of Counter State Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-bold">
						Advance Counter App
					</CardTitle>
					<AdvanceCounter />
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
