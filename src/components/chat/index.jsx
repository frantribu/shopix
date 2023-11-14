import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;
const urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

export default function PaginaChat() {
    const [mensaje, setMensaje] = useState("");
    const [usuario, setUsuario] = useState("");
    const [todosLosMensajes, setTodosLosMensajes] = useState([]);

    useEffect(() => {
        iniciarSockets();

        return () => {
            socket.disconnect();
        };
    }, []);

    async function iniciarSockets() {
        await fetch("/api/socket");

        socket = io();

        socket.on("chat:mensaje", (mensajeNuevo) => {
            setTodosLosMensajes((mensajesAnteriores) => [
                ...mensajesAnteriores,
                mensajeNuevo,
            ]);
        });
    }

    function manejarEnvioDeMensaje(e) {
        e.preventDefault();

        console.log("Mensaje enviado");

        socket.emit("chat:mensaje", { usuario, contenido: mensaje });

        setMensaje("");
    }

    return (
        <section className="text-center">
            <h1 className="text-2xl">Contactanos!</h1>
            <br />
            <p className="text-justify">Si tienes alguna pregunta, comentario o simplemente quieres ponerte en contacto con nosotros, no dudes en hacerlo. Nuestro equipo de atención al cliente está listo para ayudarte en lo que necesites. Puedes comunicarte con nosotros a través de nuestro formulario de contacto o utilizando la información de contacto proporcionada a continuación.</p>

            <form onSubmit={manejarEnvioDeMensaje} className="text-black p-5">
                <input
                    className="py-2 rounded-md pr-32 my-1"
                    onChange={(e) => setUsuario(e.target.value)}
                    type="text"
                    placeholder="Nombre de usuario"
                />

                <input
                    className="py-2 rounded-md pr-32 m-1"
                    onChange={(e) => setMensaje(e.target.value)}
                    value={mensaje}
                    type="text"
                    placeholder="Mensaje"
                />
                <br />
                <input type="submit" value="Enviar" className="bg-verde-esmeralda m-2 px-4 py-2 rounded-md text-white font-medium" />

                <ul className="text-white bg-gray-950 text-start my-5 p-2 rounded-md">
                    {todosLosMensajes.map((mensaje, index) => (
                        <li key={index} className="py-2">
                            {mensaje.contenido.match(urlRegex) ? (
                                <>
                                    {mensaje.usuario}: <br />
                                    <Image
                                        src={mensaje.contenido}
                                        widht={500}
                                        height={500}
                                    />
                                </>
                            ) : (
                                <span>
                                    {mensaje.usuario}: {mensaje.contenido}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </form>
        </section>
    )
}