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
import { InputWithIcon } from "@/components/ui/input";
import { type ISubscribeForm, subscribeSchema } from "@/schemas/subscribe";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
const Home = () => {
	const form = useForm<ISubscribeForm>({
		defaultValues: {
			username: "",
			email: "",
		},
		resolver: zodResolver(subscribeSchema),
	});

	const onSubmit = (data: ISubscribeForm) => {
		console.log(data);
	};

	return (
		<div className="flex min-h-dvh flex-col justify-center gap-16">
			<div className="flex flex-col items-center gap-8 md:items-start">
				<Image src={logo} alt="logo" width={108.5} height={30} />
				<h1 className="flex flex-col text-center font-heading font-medium text-4xl leading-none md:text-left md:text-7xl">
					<span className="text-blue">ColdCraft</span>
					Summit 2025
				</h1>
			</div>
			<div className="flex flex-col items-stretch gap-5 md:flex-row">
				<div className="flex flex-1 flex-col gap-6 space-y-6 rounded-xl border border-gray-600 bg-gray-700 p-8">
					<div className="justify flex items-center justify-between">
						<h2 className="font-heading font-semibold text-gray-200 text-xl">
							Sobre o evento
						</h2>
						<span className="flex items-center gap-2 font-semibold text-purple text-xs">
							<Radio className="size-5 " />
							AO VIVO
						</span>
					</div>
					<p className="flex flex-1 flex-col justify-between gap-2 text-gray-300 text-sm leading-relaxed md:text-base">
						<span>
							Um evento feito por e para pessoas desenvolvedoras apaixonadas por
							criar soluções inovadoras e compartilhar conhecimento. Vamos
							mergulhar nas tendências mais recentes em desenvolvimento de
							software, arquitetura de sistemas e tecnologias emergentes, com
							palestras, workshops e hackathons.
						</span>
						<span>
							Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
						</span>
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
						<div className="flex flex-col gap-2 space-y-3">
							<FormField
								control={form.control}
								name="username"
								render={({ fieldState }) => (
									<FormItem>
										<FormLabel>Usuário</FormLabel>
										<FormControl>
											<InputWithIcon
												variant={fieldState.error ? "error" : "default"}
												placeholder="Nome do usuário"
												iconLeft={<User />}
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
								render={({ fieldState }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<InputWithIcon
												variant={fieldState.error ? "error" : "default"}
												placeholder="exemplo@email.com"
												iconLeft={<Mail />}
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
	);
};

export default Home;
