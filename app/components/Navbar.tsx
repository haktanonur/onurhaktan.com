"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
    let pathname = usePathname() || "/";
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                        <div className="flex justfiy-between h-16">
                            <div className="flex justify-between w-full">
                                <div className="flex items-center ml-auto">
                                    <Themebutton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                        </div>
                    </Disclosure.Panel>
                </>
            )}

        </Disclosure>
    );
}