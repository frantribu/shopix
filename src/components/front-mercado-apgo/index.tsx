import { UserContext } from "@/context/UserContext";
import { useEffect, useContext } from "react";

export default function Page() {
    const { user } = useContext(UserContext)

    useEffect( () => {
        const fecthMP = async () => {
            const respuesta = await fetch('/api/mercado-pago', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user}),
            })
            const data = await respuesta.json()

            console.log(data.global)

            if(data.global) {
                const script = document.createElement('script')
                script.type = 'text/javascript'
                script.src = 'https://sdk.mercadopago.com/js/v2'
                script.setAttribute('data-preference-id', data.global)
                document.body.appendChild(script)
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
            //@ts-ignore
            const mercadoPago = new window.MercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
                locale: 'es-AR'
            })

            mercadoPago.checkout({
                preference: {
                    id: data.global
                },
                render: {
                    container: '.contenedorDelPago',
                    label: 'Pagar',
                }
            });
        } 

    fecthMP()
    //eslint-disable-next-line
    }, [])  

    return(
        <>
        <div className="contenerdorDelPago"></div>
        </>
    )
}   