import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { AppNav } from "@/components/AppNav";
import "./globals.css";

const manrope = Manrope({
	subsets: ["latin"],
	variable: "--font-manrope",
});

const fraunces = Fraunces({
	subsets: ["latin"],
	variable: "--font-fraunces",
});

export const metadata: Metadata = {
	title: "VirtuCare | Appointment Booking",
	description: "Book and manage healthcare appointments with an intuitive, responsive patient flow.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f8f6f2" },
		{ media: "(prefers-color-scheme: dark)", color: "#0f3f53" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} ${fraunces.variable} app-bg font-sans antialiased`}>
				<div className="min-h-screen">
					<AppNav />
					<main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6 md:pb-12 lg:px-8">{children}</main>
				</div>
			</body>
		</html>
	);
}
