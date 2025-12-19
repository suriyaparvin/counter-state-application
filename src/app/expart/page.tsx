import ExpartCounter from "@/components/ExpartCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expart | Counter State Application",
	description: "Expart page of Counter State Application",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-bold">
						Expart Counter App
					</CardTitle>
					<ExpartCounter />
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
