import Image from "next/image"
export default function Page({product} : {product: any}) {
    return (
        <>
        <Image src={product.image} alt="" width={200} height={200}/>
        <h3>{product.title}</h3>
         <p>Precio: ${product.price}</p> 
         <p>Categoria: {product.category}</p>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const res =await fetch("https://fakestoreapi.com/products")
    const datos = await res.json()

    const productoABuscar = context.params.product

    const product = datos.find((producto: any) => producto.title ===  productoABuscar)

    return {
    props: {
        product, 
    },
    }
}