import React from "react";
import './ui/styles/global.css';

import TopNav from "./ui/TopNav/TopNav";
export default function RootLayout({children,}: {children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={'bg-primary-bg'}>
                <TopNav/>
                <main className={'px-3'}>
                    {children}
                </main>
            </body>
        </html>
    )
}