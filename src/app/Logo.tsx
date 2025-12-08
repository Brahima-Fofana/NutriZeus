"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo() {
    const logoBlanc = "/logo-blanc.png";
    const logoNoir = "/logo-noir.jpg";
    
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() =>{
        setMounted(true)
    }, [])

    if(!mounted){
        return (
            <Image src={logoNoir} alt="logo NutriZeus" width={50} height={50} className="" priority />
        );
    }
    return (
        <Image src={resolvedTheme === "dark" ? logoBlanc : logoNoir} alt="logo NutriZeus" width={50} height={50} className="" priority/>
    );
}