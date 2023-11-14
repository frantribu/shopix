import { emailRegex, passwordRegex } from "@/utils/regex";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient()

export default async function Login(req:Request, res: Response) {
    const usuario = req.body

    //@ts-ignore
    if (!usuario.email.match(emailRegex))
    //@ts-ignore
    return res.status(400).json({msg: "Email invalido"})
    //@ts-ignore
  if (!usuario.password.match(passwordRegex))
  //@ts-ignore
    return res.status(400).json({msg: "Contraseña invalida"})

    const usuarioDB = await prisma.usuario.findUnique({
        where: {
            //@ts-ignore
            email: usuario.email,
        }
    })

    //@ts-ignore
    if(!usuarioDB) return res.status(403).json({msg: "Esta cuenta no existe"})
    
    const contrasenaValida= await compare(
        //@ts-ignore
        usuario.password,
        usuarioDB.password
    )

    if(!contrasenaValida) {
        //@ts-ignore
        return res.status(401).json({msg: "Contraseña invalida!" })
    }

    const token = sign(usuarioDB, process.env.TOKEN_SECRET as string, {
        expiresIn:"7d",
    })

    //@ts-ignore
    return res.status(200).json(token)
}