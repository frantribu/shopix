
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react"
import axios from "axios" 
import Image from "next/image"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Tienda Shopix. Todo lo que buscas!</h1>
         

    </main>
  )
}
