import {genSalt, hash} from "bcrypt";

export async function encriptarContraseña(password: string) {
    const cantidadDeSaltos = await(genSalt(10));
    const contrasenaHash = await hash(password, cantidadDeSaltos)

    return contrasenaHash;
}