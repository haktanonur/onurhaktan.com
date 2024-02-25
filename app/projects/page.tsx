import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div>

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className=" text-2xl font-bold leading-8 tracking-tight">
          Projects
        </h1>
      </div>

      <div className="justify-center grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-10">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 dark:bg-#222222"
            style={{ maxWidth: "330px" }}
          >
            {/* <div className="h-56 w-full relative">
              <Image
                fill
                src={project.imageUrl}
                alt="Image of the project"
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className=" line-clamp-3 mt-2 text-m leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <a
                href={project.link}
                target="_blank"
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
    </div>
  );
}