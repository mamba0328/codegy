'use client'

import React from 'react';
import Link from 'next/link'
import clsx from "clsx";
import { poppins, inter } from "../fonts";
import { usePathname } from "next/navigation";

type AppLink = {
    href: string,
    title: string,
}

const links:AppLink[] = [
    {
        href:'/contact',
        title: 'Contact',
    },
    {
        href:'/about',
        title: 'About',
    },
]


function TopNav() {
    const currentHref = usePathname();
    return (
        <header className={'bg-secondary-bg mb-5'}>
            <nav className={'flex justify-start items-center gap-2 max-w-[1440px] w-full my-0 mx-auto p-3'}>
                <Link href={'/'}>
                    <span className={`${poppins.className} text-white font-bold text-xl cursor-pointer`}>CODEGY</span>
                </Link>
                <ul className={'flex gap-2'}>
                    {links.map(link => {
                        const {href, title} = link;
                        return (
                            <li key={title}>
                                <Link href={href} className={clsx(
                                    `${inter.className} font-bold`,
                                    {
                                        'text-secondary-color': href !== currentHref,
                                        'text-primary-color': href === currentHref,
                                    },
                                )}>
                                    {title}
                                </Link>
                        </li>)
                    })}
                </ul>
                <Link className={'ml-auto'} href={'/profile'}>
                    <img src={'/imgs/svg/person.svg'} className={'text-secondary-color fill-secondary-color'} alt={'person img'}/>
                </Link>
            </nav>
        </header>
    );
}

export default TopNav;