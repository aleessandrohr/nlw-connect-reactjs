"use client";

import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input, InputWithIcon } from "@/components/ui/input";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Home = () => {
	const form = useForm();

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<main className="mx-auto max-w-screen-xl px-5 py-8 md:py-0">
			<div className="flex min-h-dvh flex-col justify-center gap-16">
				<div className="flex flex-col items-center gap-8 md:items-start">
					<Image src={logo} alt="logo" width={108.5} height={30} />
					<h1 className="flex flex-col text-center font-heading font-medium text-4xl leading-none md:text-left md:text-7xl">
						<span className="text-blue">ColdCraft</span>
						Summit 2025
					</h1>
				</div>
				<div className="flex flex-col items-stretch gap-5 md:flex-row">
					<div className="flex-1 gap-6 space-y-6 rounded-xl border border-gray-600 bg-gray-700 p-8">
						<div className="justify flex items-center justify-between">
							<h2 className="font-heading font-semibold text-gray-200 text-xl">
								Sobre o evento
							</h2>
							<span className="flex items-center gap-2 font-semibold text-purple text-xs">
								<Radio className="size-5 " />
								AO VIVO
							</span>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed md:text-base">
							Um evento feito por e para pessoas desenvolvedoras apaixonadas por
							criar soluções inovadoras e compartilhar conhecimento. Vamos
							mergulhar nas tendências mais recentes em desenvolvimento de
							software, arquitetura de sistemas e tecnologias emergentes, com
							palestras, workshops e hackathons.
							<br />
							<br />
							Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
						</p>
					</div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-md"
						>
							<h2 className="font-heading font-semibold text-gray-200 text-xl">
								Inscrição
							</h2>
							<div className="space-y-3">
								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Usuário</FormLabel>
											<FormControl>
												<InputWithIcon
													placeholder="shadcn"
													icon={<User />}
													{...form.register("username")}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Usuário</FormLabel>
											<FormControl>
												<InputWithIcon
													placeholder="shadcn"
													icon={<Mail />}
													{...form.register("email")}
													type="email"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<Button type="submit" className="w-full">
								Confirmar <ArrowRight />
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</main>
	);
};

export default Home;
