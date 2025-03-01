"use client";

import logo from "@/assets/logo.svg";
import medalCooper from "@/assets/medal-cooper.svg";
import medalGold from "@/assets/medal-gold.svg";
import medalSilver from "@/assets/medal-silver.svg";
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
import { type IInviteForm, inviteSchema } from "@/schemas/invite";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const InvitePage = () => {
	const form = useForm<IInviteForm>({
		defaultValues: {
			invite: "https://example.com/invite/id",
		},
		resolver: zodResolver(inviteSchema),
	});

	const onSubmit = () => {
		return;
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(form.getValues("invite"));
		toast("Link copiado para a área de transferência");
	};

	return (
		<div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
			<div className="flex w-full max-w-lg flex-col gap-10">
				<Image src={logo} alt="logo" width={108.5} height={30} />
				<div className="space-y-2">
					<h1 className="font-heading font-semibold text-4xl text-gray-100 leading-none">
						Inscrição confirmada
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link enviado para o seu e-mail.
					</p>
				</div>
				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Convide mais pessoas para o evento e concorra a prêmios
							exclusivos! É só compartilhar o link abaixo e acompanhar as
							inscrições:
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name="invite"
								render={() => (
									<FormItem>
										<FormLabel>Link de indicação</FormLabel>
										<FormControl>
											<InputWithIcon
												placeholder="Nome do usuário"
												iconLeft={<Link className="size-5" />}
												iconRight={
													<Button
														type="button"
														variant="ghost"
														size="icon"
														className="-mr-2"
														onClick={handleCopy}
													>
														<Copy className="size-5" />
													</Button>
												}
												{...form.register("invite")}
												readOnly
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
					<div className="grid gap-3 md:grid-cols-3">
						<div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 p-4">
							<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
								1000
							</span>
							<span className="text-center text-gray-300 text-sm leading-none">
								Acessos ao link
							</span>
							<MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
						</div>
						<div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 p-4">
							<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
								1000
							</span>
							<span className="text-center text-gray-300 text-sm leading-none">
								Inscrições feitas
							</span>
							<BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
						</div>
						<div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 p-4">
							<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
								1000
							</span>
							<span className="text-center text-gray-300 text-sm leading-none">
								Posição no ranking
							</span>
							<Medal className="absolute top-3 left-3 size-5 text-purple" />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-md space-y-5">
				<h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
					Ranking de indicações
				</h2>
				<div className="space-y-4">
					<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
						<span className="text-gray-300 text-sm leading-none">
							<span className="font-semibold">1º</span> | Alessandro Ramos
						</span>
						<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
							1000
						</span>
						<Image
							src={medalGold}
							alt="Medalha de ouro"
							className="absolute top-0 right-8"
						/>
					</div>
					<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
						<span className="text-gray-300 text-sm leading-none">
							<span className="font-semibold">2º</span> | Alessandro Ramos
						</span>
						<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
							1000
						</span>
						<Image
							src={medalSilver}
							alt="Medalha de prata"
							className="absolute top-0 right-8"
						/>
					</div>
					<div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
						<span className="text-gray-300 text-sm leading-none">
							<span className="font-semibold">3º</span> | Alessandro Ramos
						</span>
						<span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
							1000
						</span>
						<Image
							src={medalCooper}
							alt="Medalha de bronze"
							className="absolute top-0 right-8"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvitePage;
