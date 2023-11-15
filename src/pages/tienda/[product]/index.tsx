import Image from "next/image"
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function Page({ product }: { product: any }) {
    //@ts-ignore
    const { cart, setCart } = useContext(CartContext)
    return (
        <section className="">
       
            <Image
                src={product.image}
                height={200}
                width={200}
                alt=""
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white ">

                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.title}</h3>

                <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>
                <p className="mt-1.5 text-sm text-gray-700">{product.description}</p>

                <form className="mt-4">
                    <button
                        className="block w-full rounded bg-verde-esmeralda p-4 text-sm font-medium transition hover:scale-105"
                    >
                        Añadir al carrito
                    </button>
                </form>
            </div>


        </section>
    )
}

export async function getServerSideProps(context: any) {
    const res = await fetch("https://fakestoreapi.com/products")
    const datos = await res.json()

    const productoABuscar = context.params.product

    const product = datos.find((producto: any) => producto.title === productoABuscar)

    return {
        props: {
            product,
        },
    }
}