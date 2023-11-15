import Image from 'next/image'; 
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='mb-20'>
      <nav className="w-full bg-gray-900 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              {/*logo*/}
              <a href="/">
                <Image src="/img/logo.png" alt='' width={40} height={40} />
              </a>

               {/*buscador*/}

              {/* Boton hamburguesa */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-verde-esmeralda  border-verde-esmeralda  md:hover:text-verde-esmeralda md:hover:bg-transparent">
                  <Link href="/tienda" onClick={() => setNavbar(!navbar)}>
                    Productos
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-verde-esmeralda  border-verde-esmeralda  md:hover:text-verde-esmeralda md:hover:bg-transparent">
                  <Link href="/contacto" onClick={() => setNavbar(!navbar)}>
                    Contacto
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-verde-esmeralda  border-verde-esmeralda  md:hover:text-verde-esmeralda md:hover:bg-transparent">
                  <Link href="/auth/registrarse" onClick={() => setNavbar(!navbar)}>
                    Registrarse
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-verde-esmeralda  border-verde-esmeralda  md:hover:text-verde-esmeralda md:hover:bg-transparent">
                  <Link href="/auth/iniciar-sesion" onClick={() => setNavbar(!navbar)}>
                    Iniciar sesión
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;