import Image from "next/image";
import { client } from "@/app/lib/sanity";
import { GithubIcon } from "@/app/components/icons";
import { GITHUB_URL } from "@/app/lib/constants";
import type { Project } from "@/app/lib/types";

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] {
    title,
    overview,
    link,
    _id,
    "imageUrl": image.asset->url
  }`;

  return client.fetch(query);
}

export const revalidate = 60;

export default async function Projects() {
  const data = await getProjects();

  return (
    <div>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-2xl font-bold leading-8 tracking-tight">
          Projects
        </h1>
      </div>

      <div className="justify-center grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-10">
        {data.map((project) => (
          <article
            key={project._id}
            className="max-w-[330px] overflow-hidden rounded-lg border border-gray-100 dark:border-zinc-600 dark:bg-[#222222]"
          >
            <div className="p-4 sm:p-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className="line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-500"
              >
                See Project
                <span className="block transition-all group-hover:ms-0.5">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
        Check out more projects on my GitHub
      </p>
      <div className="flex items-center justify-center mt-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <GithubIcon className="w-8 h-8 text-gray-600 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-500" />
        </a>
      </div>
    </div>
  );
}