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
            <a href={"@/public//cv.pdf"} download="cv.pdf">
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
          
          <p>👋 Hey everyone, I am Onur, a 4th-year student at Eskişehir Technical University. 
           I develop web services and full-stack projects using Java, Spring Framework and AngularJS technologies.</p>
          <p>🌱 Currently, I am learning C# and .NET technologies.</p> 
          <p>🔭 Additionally, I am involved in projects related to artificial intelligence and deep learning.</p> 
          <p>👨‍💻 You can access most of the projects I have developed through my GitHub profile.</p>
        
          
          <h3 className="pt-4 pb-2 text-xl font-bold leading-8 tracking-tight mt-5">
          Skills & Technologies
          </h3>
          <div className="flex space-x-5 pt-6"> 

          <a href=""> 
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path
                fill="currentColor"
                d="M12.557 23.22s-.982.571.699.765c2.037.232 3.079.199 5.324-.226 0 0 .59.37 1.415.691-5.033 2.157-11.39-.125-7.437-1.23zm-.615-2.815s-1.102.816.581.99c2.176.224 3.895.243 6.869-.33 0 0 .411.417 1.058.645-6.085 1.779-12.863.14-8.508-1.305zm5.185-4.775c1.24 1.428-.326 2.713-.326 2.713s3.149-1.625 1.703-3.661c-1.351-1.898-2.386-2.841 3.221-6.093 0 0-8.801 2.198-4.598 7.042zm6.656 9.672s.727.599-.801 1.062c-2.905.88-12.091 1.146-14.643.035-.917-.399.803-.953 1.344-1.069.564-.122.887-.1.887-.1-1.02-.719-6.594 1.411-2.831 2.021 10.262 1.664 18.706-.749 16.044-1.95zm-10.754-7.813s-4.673 1.11-1.655 1.513c1.274.171 3.814.132 6.181-.066 1.934-.163 3.876-.51 3.876-.51s-.682.292-1.175.629c-4.745 1.248-13.911.667-11.272-.609 2.232-1.079 4.046-.956 4.046-.956zm8.383 4.685c4.824-2.506 2.593-4.915 1.037-4.591-.382.079-.552.148-.552.148s.142-.222.412-.318c3.079-1.083 5.448 3.193-.994 4.887 0 0 .075-.067.097-.126zM18.503 3.337s2.671 2.672-2.534 6.781c-4.174 3.296-.952 5.176-.002 7.323-2.436-2.198-4.224-4.133-3.025-5.934 1.761-2.644 6.638-3.925 5.56-8.17zm-5 25.629c4.63.296 11.74-.164 11.908-2.355 0 0-.324.831-3.826 1.49-3.952.744-8.826.657-11.716.18 0 0 .592.49 3.635.685z"
              />
            </svg>
          </a> 

          <a href=""> 
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z" />
            </svg> 
          </a> 

          <a href=""> 
            <svg
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
            </svg>
          </a>

          <a href=""> 
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M21.854 1.416a10.45 10.45 0 01-1.284 2.247A11.967 11.967 0 103.852 20.776l.444.395a11.954 11.954 0 0019.632-8.297c.346-3.013-.568-6.865-2.074-11.458zM5.58 20.875a1.017 1.017 0 11-.149-1.433 1.04 1.04 0 01.149 1.432zm16.199-3.581c-2.939 3.926-9.26 2.593-13.286 2.79 0 0-.716.05-1.432.148 0 0 .272-.123.618-.247 2.84-.987 4.173-1.185 5.901-2.074 3.235-1.654 6.47-5.284 7.112-9.038-1.235 3.606-4.988 6.717-8.396 7.976-2.346.865-6.568 1.704-6.568 1.704l-.173-.099c-2.865-1.407-2.963-7.63 2.272-9.63 2.296-.89 4.47-.395 6.963-.988 2.643-.617 5.705-2.593 6.94-5.186 1.382 4.174 3.061 10.643.049 14.644z" />
            </svg>
          </a> 

          <a href="">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M213.57 256h84.85l-42.43-89.36L213.57 256z" />
              <path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" />
            </svg>
          </a>

          <a href="">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" />
            </svg> 
          </a> 

          <a href=""> 
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M23.56 14.723a.527.527 0 00-.057-.12c-.139-.262-.477-.341-1.007-.231-1.654.34-2.294.13-2.526-.02 1.342-2.048 2.445-4.522 3.041-6.83.272-1.05.798-3.523.122-4.73a1.564 1.564 0 00-.15-.236C21.692.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a9.449 9.449 0 00-.516-.082 8.044 8.044 0 00-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744.46 1.506.938 2.702 1.433 3.582.553.994 1.126 1.593 1.714 1.79.448.148 1.133.143 1.858-.729a55.982 55.982 0 011.945-2.206c.435.235.906.362 1.39.377a.057.057 0 000 .004 11.031 11.031 0 00-.247.305c-.339.43-.41.52-1.5.745-.31.064-1.134.233-1.146.811a.591.591 0 00.091.327c.227.423.922.61 1.015.633 1.335.333 2.505.092 3.372-.679-.017 2.231.077 4.418.345 5.088.221.553.762 1.904 2.47 1.904.25 0 .526-.03.829-.094 1.782-.382 2.556-1.17 2.855-2.906.15-.87.402-2.875.539-4.101.017-.07.036-.12.057-.136 0 0 .07-.048.427.03a.367.367 0 00.044.007l.254.022.015.001c.847.039 1.911-.142 2.531-.43.644-.3 1.806-1.033 1.595-1.67zM2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571-.109-2.172.417-3.683 1.562-4.493 1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36.034.586.1 1.68-.074 2.918-.16 1.15.194 2.276.973 3.089.08.084.165.163.252.237-.347.371-1.1 1.193-1.903 2.158-.568.682-.96.551-1.088.508-.392-.13-.813-.587-1.239-1.322-.48-.839-.963-2.032-1.415-3.512zm6.007 5.088a1.626 1.626 0 01-.432-.178c.089-.039.237-.09.483-.14 1.284-.265 1.482-.451 1.915-1 .099-.127.211-.27.367-.443a.355.355 0 00.074-.13c.17-.151.272-.11.436-.042.156.065.308.26.37.475.03.102.062.295-.045.445-.904 1.266-2.222 1.25-3.168 1.013zm2.094-3.988l-.052.14c-.133.357-.257.689-.334 1.004-.667-.002-1.317-.288-1.81-.803-.628-.655-.913-1.566-.783-2.5.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772.446.102.718.406.83.928.585 2.704.078 3.83-.33 4.736a8.784 8.784 0 00-.23.546zm7.364 4.572c-.017.177-.036.376-.062.596l-.146.438a.355.355 0 00-.018.108c-.006.475-.054.649-.115.87-.064.229-.135.488-.18 1.057-.11 1.414-.878 2.227-2.417 2.556-1.515.325-1.784-.496-2.02-1.221a6.582 6.582 0 00-.078-.227c-.215-.586-.19-1.412-.157-2.555.016-.561-.025-1.901-.33-2.646.004-.293.01-.591.019-.892a.353.353 0 00-.016-.113 1.493 1.493 0 00-.044-.208c-.122-.428-.42-.786-.78-.935-.142-.059-.403-.167-.717-.087.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5.426-.948 1.01-2.246.376-5.178-.237-1.098-1.03-1.634-2.232-1.51-.72.075-1.38.366-1.709.532a5.672 5.672 0 00-.196.104c.092-1.106.439-3.174 1.736-4.482a4.03 4.03 0 01.303-.276.353.353 0 00.145-.064c.752-.57 1.695-.85 2.802-.833.41.007.802.034 1.174.081 1.94.355 3.244 1.447 4.036 2.383.814.962 1.255 1.931 1.431 2.454-1.323-.134-2.223.127-2.68.78-.992 1.418.544 4.172 1.282 5.496.135.242.252.452.289.54.24.583.551.972.778 1.256.07.087.138.171.189.245-.4.116-1.12.383-1.055 1.717-.013.156-.043.447-.084.815-.046.208-.07.46-.1.766zm.89-1.621c-.04-.832.27-.919.597-1.01a2.857 2.857 0 00.135-.041 1.202 1.202 0 00.134.103c.57.376 1.583.421 3.007.134-.202.177-.519.4-.953.601-.41.19-1.096.333-1.747.364-.72.034-1.086-.08-1.173-.151zm.57-9.271c-.006.35-.054.669-.105 1.001-.055.358-.112.728-.127 1.177-.014.436.04.89.093 1.33.107.887.216 1.8-.207 2.701a3.527 3.527 0 01-.188-.385 7.57 7.57 0 00-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744.38-.543 1.342-.566 2.179-.463zm.228 7.013a12.376 12.376 0 00-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439-.052-.432-.1-.84-.088-1.222.013-.407.066-.755.118-1.092.064-.415.13-.844.111-1.35a.559.559 0 00.012-.19c-.046-.486-.6-1.938-1.73-3.253a7.803 7.803 0 00-2.688-2.04A9.251 9.251 0 0117.62.746c2.052.046 3.675.814 4.824 2.283a.908.908 0 01.067.1c.723 1.356-.276 6.275-2.987 10.54zm-8.816-6.116c-.025.18-.31.423-.621.423a.582.582 0 01-.081-.006.797.797 0 01-.506-.315c-.046-.06-.12-.178-.106-.285a.223.223 0 01.093-.149c.118-.089.352-.122.61-.086.316.044.642.193.61.418zm7.93-.411c.011.08-.049.2-.153.31a.722.722 0 01-.408.223.546.546 0 01-.075.005c-.293 0-.541-.234-.56-.371-.024-.177.264-.31.56-.352.298-.042.612.009.636.185z" />
            </svg> 
          </a> 

          <a href=""> 
            <svg
              data-name="Layer 1"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.55 132.55 0 00-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28-4.75 6.9a101.65 101.65 0 00-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 000 262.07a241.25 241.25 0 0014.75 86.83C26.39 379.35 43.72 402 66 415.74 91.22 431.2 132.3 440 178.6 440a344.23 344.23 0 0062.45-5.71 257.44 257.44 0 0081.69-29.73 223.55 223.55 0 0055.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.31 63.31 0 0015.2-22.36l2.14-6.18z" />
              <path d="M47.29 236.37H92.4a4 4 0 004-4v-40.48a4 4 0 00-4-4H47.29a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M109.5 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M172.9 236.37H218a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a3.87 3.87 0 004 4M235.36 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4 4 0 004 4M109.5 178.57h45.12a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4H109.5a4 4 0 00-4 4v40.44a4.34 4.34 0 004 4M172.9 178.57H218a4.16 4.16 0 004-4v-40.48a4 4 0 00-4-4h-45.1a4 4 0 00-4 4v40.44a4 4 0 004 4M235.36 178.57h45.12a4.16 4.16 0 004-4v-40.48a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4M235.36 120.53h45.12a4 4 0 004-4V76a4.16 4.16 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.17 4.17 0 004 4M298.28 236.37h45.12a4 4 0 004-4v-40.48a4 4 0 00-4-4h-45.12a4 4 0 00-4 4v40.44a4.16 4.16 0 004 4" />
            </svg>
          </a> 

          <a href=""> 
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
            </svg> 
          </a> 

          <a href="" >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 11.847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 01-.067-.032.06.06 0 01.01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 01-.085-.039.072.072 0 01.013-.093zm-3.646 6.058a.076.076 0 01-.069-.083.077.077 0 01.022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 00-.117.256l.203.865a.125.125 0 01-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 00.119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 012.459-2.684l-1.61 1.613a.119.119 0 000 .169l1.247 1.247a1.817 1.817 0 01-2.093-.343zm2.578 0a1.714 1.714 0 01-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zm-.1-1.544a.143.143 0 00-.053.157.416.416 0 01-.053.45.14.14 0 00.023.197.141.141 0 00.084.03.14.14 0 00.106-.05.691.691 0 00.087-.751.138.138 0 00-.194-.033z" />
            </svg>
          </a> 
      
          <a href=""> 
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59 0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26 0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91z" />
            </svg>
          </a> 

          <a href=""> 
            <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            className="w-10 h-10 text-amber-400 hover:text-amber-500"
          >
            <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
          </svg> 
          </a> 

          <a href=""> 
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-10 h-10 text-amber-400 hover:text-amber-500"
            >
              <path
                fill="currentColor"
                d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
              />
            </svg> 
          </a> 
          </div>
        </div>
         
      </div>

      <Projects/>

      <footer>
      <div className="mt-16 mt-16 flex flex-col items-center">
        
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{"© ${new Date().getFullYear()}"}</div>
          <div>{"•"}</div>
          <div>{"Onur Haktan"}</div>
        </div>
        
      </div>
    </footer>

    </div>
  
  );
}
