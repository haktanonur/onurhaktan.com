"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
    let pathname = usePathname() || "/";
    return(
        <Disclosure as="nav">
            {({open}) =>(
                <>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                    <div className="flex justfiy-between h-16">
                        <div className="flex justify-between w-full">                           
                            <div className="flex items-center ml-auto">                          
                                <Themebutton />
                            </div>
                        </div>
                        
                        <div className="-mr-2 flex items-center sm:hidden">
                            <Themebutton />
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
                            {open ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            ) : (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                                </svg>
                            )}
                            </Disclosure.Button>
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