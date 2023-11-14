import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [categorias, setCategorias] = useState([])

  async function mostrarCategorias() {

    const respuesta = await fetch("https://fakestoreapi.com/products/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const categoria = await response.json()
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

    </main>
  )
}
