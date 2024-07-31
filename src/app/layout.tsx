"use client";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/state/store";

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider store={store}>
            <html lang="en">
                <body className={GeistSans.className}>{children}</body>
            </html>
        </Provider>
    );
}
