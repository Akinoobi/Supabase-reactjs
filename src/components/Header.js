import { tabs } from "@/lib/const"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [navName, setNavName] = useState("First")
    return (
        <div role="navigation" className="transition-all sticky top-0 z-50 bg-white shadow-xl">
            <div className="w-full py-2">
                <label className="w-full flex justify-center text-black text-6xl font-serif">
                    Home Test by Angelo Palma
                </label>
            </div>
            <div className="w-full max-w-[280px] mx-auto px-4 xl:px-0">
                <div className={`flex flex-no-wrap items-center justify-center gap-x-4 overflow-auto mt-4 whitespace-nowrap`}>
                    {tabs.map((tab, index) => {
                        return (
                            <Link key={index} href={""} className={`text-black text-3xl px-[4.4px] rounded-t-lg ${ tab.name !== navName ? "bg-transparent" : "bg-yellow-500"} `} onClick={() => setNavName(tab.name)}>
                            {tab.name}
                            </Link>
                    )})}

                </div>
                <div className={`h-[20px] bg-yellow-500 ${navName === "First" ? "rounded-tr-lg" : navName ==="Second" ? "rounded-t-lg":"rounded-tl-lg"}`}>

                </div>
            </div>
        </div>
    )
}