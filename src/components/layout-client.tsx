"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Toaster />
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</>
	);
};
