"use client";
import { FormEvent, useRef } from "react"
import { verify } from "jsonwebtoken";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Link from "next/link";

export default function FormularioDeRegistro() {
  const nombreRef = useRef(null)
  const edadRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  //@ts-ignore
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  async function mandarDatosDeRegistro(evento: FormEvent) {
    evento.preventDefault();

    const datosAEnviar = {
      //@ts-ignore
      nombre: nombreRef.current?.value,
      //@ts-ignore
      edad: Number(edadRef.current?.value),
      //@ts-ignore
      email: emailRef.current?.value,
      //@ts-ignore
      password: passwordRef.current?.value

    }

    console.log(datosAEnviar)
    const respuesta = await fetch(
      "http://localhost:3000/api/usuarios/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosAEnviar),
      });

    if (respuesta.status != 201) {
      const error = await respuesta.json();
      alert(error.msg);
    }

    if (respuesta.status == 201) {
      alert("Gracias por registrarte!")
      router.push("/auth/iniciar-sesion")

    }
     

    const token = await respuesta.json();

    setUser({ ...datosAEnviar, token })

    console.log(user);

  }

  return (
    <>

      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">REGISTRARSE</h1>

          </div>

          <form onSubmit={mandarDatosDeRegistro} className="mx-auto mb-0 mt-8 max-w-md space-y-4 text-black">
            <div>
              <label className="sr-only">Nombre completo</label>

              <div className="relative">
                <input
                  ref={nombreRef}
                  type="nombre"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Nombre completo..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="sr-only"> Edad</label>

              <div className="relative">
                <input
                  ref={edadRef}
                  type="edad"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Edad..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  ref={emailRef}
                  type="email"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Email..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label className="sr-only">Contraseña</label>

              <div className="relative">
                <input
                  ref={passwordRef}
                  type="password"
                  className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Contraseña..."
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Ya tenes cuenta?
                <Link className="underline" href="/auth/iniciar-sesion">Inicia sesión</Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )

}