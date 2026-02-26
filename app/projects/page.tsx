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
    <section className="py-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-6">
        Projects
      </h2>

      <div className="stagger-children space-y-4">
        {data.map((project) => (
          <a
            key={project._id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-medium text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-500 dark:text-stone-400 line-clamp-2">
                  {project.overview}
                </p>
              </div>
              <span className="mt-1 text-stone-300 dark:text-stone-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors flex-shrink-0">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
        >
          <GithubIcon className="w-4 h-4" />
          More on GitHub
        </a>
      </div>
    </section>
  );
}