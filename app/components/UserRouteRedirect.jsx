"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MobileRedirect() {
    const router = useRouter();

    useEffect(() => {
        const checkDevice = () => {
            if (window.innerWidth < 1024) { // tablet + mobile
                router.replace("https://m.rupongomez.xyz/");
            }
        };

        checkDevice();

        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, [router]);

    return null;
}