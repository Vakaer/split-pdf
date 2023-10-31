import React from 'react'
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}
export default function Layout({ children, title = 'My Next.js App' }: LayoutProps) {
    return (
        <>
            <main>
                <Navbar />
                <div >
                    {children}
                </div>
                <Footer />
            </main>
        </>
    )
}
