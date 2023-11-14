import Layout from '../components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { UserProvider } from '@/context/UserContext'
import { CartProvider } from '@/context/CartContext'
import NavBar from '@/components/nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section>

      <NavBar/>
      <Layout>
        <UserProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </UserProvider>
      </Layout>
      <NavBar/>

    </section >
  )
}