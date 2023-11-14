import { emailRegex, passwordRegex } from "@/utils/regex";
import { encriptarContraseña } from "@/utils/crypto";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function Register(req: Request, res:Response) {
  const usuario = req.body;

  //@ts-ignore
  if (Object.values(usuario).includes(undefined)) {
    //@ts-ignore
    return res.status(400).json({msg:"Error! Faltan datos"})
  }

  //@ts-ignore
  if (!usuario.email.match(emailRegex))
  //@ts-ignore
    return res.status(400).json({msg: "Email invalido"}) 
  //@ts-ignore
  if (!usuario.password.match(passwordRegex))
  //@ts-ignore
    return res.status(400).json({msg: "Contraseña invalida!"})

    //@ts-ignore
  const hash = await encriptarContraseña(usuario.password);

  const usuarioAGuardar = { ...usuario, password: hash };

  //@ts-ignore
  const usuarioSubido = await prisma.usuario.create({ data: usuarioAGuardar });

//@ts-ignore
  if (!usuarioSubido) return res.status(500).json({msg: "No se pudo subir el usuario"})
  const token = sign(usuarioAGuardar, process.env.TOKEN_SECRET as string);

  //@ts-ignore
  return res.status(201).json({token})
}