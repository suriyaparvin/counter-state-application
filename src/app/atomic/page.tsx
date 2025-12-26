import AtomicCounter from "@/components/AtomicCountert";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center font-bold">
						Atomic Counter App
					</CardTitle>
					<AtomicCounter />
				</CardHeader>
			</Card>
		</section>
	);
};

export default page;
