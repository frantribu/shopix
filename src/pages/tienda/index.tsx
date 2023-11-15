import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
    id: string
    title: string
    price: number
    description: string
    category: string
    image: string
};

export default function TiendaPagina({ product }: { product: Product[] }) {
    //@ts-ignore
    const { cart, setCart } = useContext(CartContext)

    return (
        <>
            <button onClick={() => console.log(cart)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
            </svg></button>
            <ul className="grid gap-5 m-3 grid-cols-2 lg:grid-cols-3">
                {product.map((product: Product) => (
                    <li key={product.id}>
                        <div className="border  border-gray-300 rounded-lg">
                        <Link href={`/tienda/${product.title}`} className="group block overflow-hidden ">
                            <Image
                                src={product.image}
                                alt=""
                                width={300}
                                height={300}
                                className=" rounded-lg rounded-b-none h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[300px] border-b-2"
                            />
                        
                            <div className="relative bg-white pt-3 ">
                                <h3
                                    className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                >
                                    {product.title}
                                </h3>

                                <p className="mt-2">
                                    <span className="sr-only"> Regular Price </span>

                                    <span className="tracking-wider text-gray-900"> ${product.price} </span>
                                </p>
                            </div>
                        </Link>

                        <button className="" onClick={() => {
                            setCart({
                                product: [...cart.product, product],
                                total: cart.total + product.price,
                            });
                        }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus ml-36" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                        <path d="M12.5 17h-6.5v-14h-2" />
                        <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                      </svg></button>
                      </div>
                    </li>
                ))}
                
        </ul >
        </>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch("https://fakestoreapi.com/products")
    const product = await res.json()

    return {
        props: {
            product,
        },
    }
}