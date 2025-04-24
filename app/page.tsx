import Image from "next/image";
import Me from "@/public/me.jpeg";
import Projects from "./projects/page";
import { FaMedium } from "react-icons/fa";

export default function Home() {
  return (
    <div className= "max-w-3xl mx-auto">
      <div className="flex-1 pb-4 md:pb-6 lg:pb-6">
        <div className="content md:mt-2 lg:mt-4 flex flex-col items-center">
            <Image
              alt="Picture of Onur"
              src={Me}
              className="h-44 w-44 rounded-full object-cover object-top"
            />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Onur Haktan
          </h3>
          <p className="text-gray-500 dark:text-gray-300">
            Software Engineer
          </p>

          <div className="flex space-x-5 pt-6">
            <a href="https://github.com/haktanonur" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-amber-400 hover:text-amber-500"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/onur-haktan/" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-amber-400 hover:text-amber-500"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
              </svg>
            </a>
            <a href="mailto:onurhaktann@gmail.com" target="_blank">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-8 h-8 text-amber-400 hover:text-amber-500"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
              </svg>
            </a>

            <a href="https://medium.com/@onurhaktan" target="_blank">
              <FaMedium className="w-8 h-8 text-amber-400 hover:text-amber-500" />
            </a>
    
          </div>
      

        </div>

        <div className="content mt-6">
          <p className="mb-3">
            I'm Onur Haktan, a software engineer specialized in backend and full-stack development. 
            Currently, I'm working at {" "}
            <a href="https://www.ykteknoloji.com.tr/" target="_blank">
              <b>Yapi Kredi Technology</b>
            </a>
            , where I contribute to large-scale projects in the finance and capital markets domain. 
            I approach every task with responsibility, a strong sense of ownership, and a continuous improvement mindset. 
            I care deeply about writing clean, maintainable code, designing scalable systems, and delivering high-quality software within Agile teams.
          </p>
        </div>
        
      </div>
          <div className="mb-3">
            <h3 className="pb-2 text-2xl font-bold leading-8 tracking-tight">
            Technologies & Tools
            </h3>
            <div>
              <div className="flex flex-wrap gap-y-3 sm:grid-cols-3 lg:grid-cols-2 space-x-2 pt-2 "> 
                <p>   </p><img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"></img>
                <img alt="Spring" src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"></img>
                <img alt="Hibernate" src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"></img>
                <img alt="Apache Maven" src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white"></img>
                <img alt="JWT" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"></img>
                <img alt="Postgres" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"></img>
                <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"></img>
                <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)"></img>
                <img alt="ReactJS" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>
                <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></img>
                <img alt="C#" src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"></img>
                <img alt=".Net" src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"></img>
                <img alt="jQuery" src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"></img>
                <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white"></img>
                <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></img>
                <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
                <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"></img>
              </div>
            </div>
          </div>

      <Projects/>

      <footer>
      <div className="mt-8 mt-8 flex flex-col items-center">
        
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{"© Onur Haktan"}</div>
        </div>
        
      </div>
    </footer>

    </div>
  
  );
}