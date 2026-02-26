import { SITE_OWNER } from "@/app/lib/constants";

export default function Footer() {
    return (
        <footer>
            <div className="mt-8 flex flex-col items-center">
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{`© ${SITE_OWNER}`}</div>
                </div>
            </div>
        </footer>
    );
}
