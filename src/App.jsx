import Home from "./assets/home.svg";
import User from "./assets/user.svg";
import Case from "./assets/briefcase.svg";
import Contact from "./assets/contact.svg";
import Leo from "./assets/leo.jpg";
import GitH from "./assets/github.svg";
import Lkdn from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <div className="flex flex-row min-h-screen overflow-hidden">
        <div className="bg-gray-100 w-12 lg:w-72 min-h-screen border-r-2 border-fuchsia-600 md:none">
          <div className="flex flex-none w-full justify-center items-center lg:py-16 text-center">
            <div className="text-purple-900 text-center text-2xl font-extrabold items-center border-indigo-600 lg:visible invisible animate-pulse">
              DIO<span className="text-yellow-500">.</span>ME
            </div>
          </div>
          <div>
            <nav className="visible lg:invisible flex w-full mt-40">
              <ul className="text-left">
                <li className="list-inside ml-2 mb-6 w-12">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Home}
                      alt="home"
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                </li>
                <li className="list-inside ml-2 mb-6 w-12">
                  <a href="#" className="flex justify-start">
                    <img
                      src={User}
                      alt="home"
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                </li>
                <li className="list-inside ml-2 mb-6 w-12">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Case}
                      alt="home"
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                </li>
                <li className="list-inside ml-2 mb-6 w-12">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Contact}
                      alt="home"
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="lg:visible invisible flex w-full -mt-80">
              <ul className="text-left text-base">
                <li className="list-inside font-bold border-b-2 w-52 border-indigo-600 border-opacity-25 mx-8 mb-6 pb-3 text-gray-900 hover:text-purple-900">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Home}
                      alt="home"
                      className="h-6 w-6 ml-2 mr-2 object-contain"
                    />{" "}
                    HOME
                  </a>
                </li>
                <li className="list-inside font-bold border-b-2 w-52 border-indigo-600 border-opacity-25 mx-8 mb-6 pb-3 text-gray-900 hover:text-purple-900">
                  <a href="#" className="flex justify-start">
                    <img
                      src={User}
                      alt="user"
                      className="h-6 w-6 ml-2 mr-2 object-contain"
                    />{" "}
                    ABOUT
                  </a>
                </li>
                <li className="list-inside font-bold border-b-2 w-52 border-indigo-600 border-opacity-25 mx-8 mb-6 pb-3 text-gray-900 hover:text-purple-900">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Case}
                      alt="briefcase"
                      className="h-6 w-6 ml-2 mr-2 object-contain"
                    />{" "}
                    PROJECTS
                  </a>
                </li>
                <li className="list-inside font-bold border-b-2 w-52 border-indigo-600 border-opacity-25 mx-8 mb-6 pb-3 text-gray-900 hover:text-purple-900">
                  <a href="#" className="flex justify-start">
                    <img
                      src={Contact}
                      alt="contact"
                      className="h-6 w-6 ml-2 mr-2 object-contain"
                    />{" "}
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
            <p className="lg:visible invisible text-center text-xs font-medium text-gray-400 w-full">
              Interface Criada por Leonardo Sousa ©
            </p>
          </div>
        </div>
        <div className="bg-gray-200 flex-grow w-full min-h-screen">
          <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
            <div className="grid justify-center items-center order-1 col-span-1">
              <img
                src={Leo}
                alt="usuário"
                className="lg:h-80 md:h-64 h-40 rounded-full"
              />
            </div>
            <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
              <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold">
                Olá, eu sou o Leonardo Felipe de Sousa, sou desenvolvedor
              </h1>
              <p className="text-xl text-gray-800 text-center md:text-left">
                Desenvolvedor front-end com React, Tailwind CSS e noções de
                Flutter. Apaixonado por construir interfaces responsivas e
                experiências digitais de qualidade.
              </p>
              <div className="flex flex-wrap justify-center gap-2 py-4">
                <a
                  href="https://github.com/leofsousa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <img
                      src={GitH}
                      alt="github"
                      className="w-6 h-6 fill-current"
                    />
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-sousa-71b32825a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <img
                      src={Lkdn}
                      alt="linkedin"
                      className="w-6 h-6 fill-current"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
