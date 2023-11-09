import Image from "next/image";
import Me from "@/public/me.jpg";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className= "max-w-3xl mx-auto">
      <div className="flex-1 pb-16 md:pb-20 lg:pb-24">
        <div className="content mt-6 md:mt-8 lg:mt-12">
          <Image
            alt="Picture of Onur"
            src={Me}
            className="h-48 w-48 rounded-full object-cover object-top"
          />
          <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
            Onur Haktan
          </h3>
          <p className="text-gray-500 dark:text-gray-300">
            Junior Software Developer
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
            <a href={"@/public/cv.pdf"} download="cv.pdf">
              <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-amber-400 hover:text-amber-500"
            >
              <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="content mt-6">
          
          <p>👋 Hey everyone, I'm Onur, a 4th-year student at Eskişehir Technical University. 
           I develop web services and full-stack projects using Java, Spring Framework and AngularJS technologies.</p>
          <p>🌱 Currently, I'm learning C# and .NET technologies.</p> 
          <p>🔭 Additionally, I am involved in projects related to artificial intelligence and deep learning.</p> 
          <p>👨‍💻 You can access most of the projects I've developed through my GitHub profile.</p>
        
          
          <h3 className="pt-4 pb-2 text-xl font-bold leading-8 tracking-tight mt-5">
          Skills & Technologies
          </h3>
          <div className="flex space-x-5 pt-6"> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
          </a>

          <a href=""> 
          <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> 
          </a> 

          <a href="">
             <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/>
          </a>

          <a href="">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
          </a> 

          <a href="" >
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> 
          </a> 
      
          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
          </a> 

          <a href=""> 
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> 
          </a> 
          </div>
        </div>
         
      </div>

      <Projects/>

      <footer>
      <div className="mt-16 mt-16 flex flex-col items-center">
        
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{"Onur Haktan"}</div>
        </div>
        
      </div>
    </footer>

    </div>
  
  );
}
