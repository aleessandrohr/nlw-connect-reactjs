import { Button } from "@/components/ui/button";
import { Input, InputWithIcon } from "@/components/ui/input";
import { Plus } from "lucide-react";
const Home = () => {
	return (
		<main>
			<h1>Hello World</h1>
			<Button size="icon">
				<Plus />
			</Button>
			<InputWithIcon icon={<Plus />} />
			<Input placeholder="Search" />
		</main>
	);
};

export default Home;
