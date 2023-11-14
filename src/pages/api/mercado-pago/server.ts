import mercadopago from "mercadopago";
import type {
    CreatePreferencePayload,
    PreferencePayer,
    PreferenceBackUrl,
  } from "mercadopago/models/preferences/create-payload.model";
  import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    mercadopago.configure({
        access_token: process.env.MP_ACCESS_TOKEN
    })

    const preference: CreatePreferencePayload = {
        binary_mode = true,
        items = [
        {
            title: `${producto.title} - Nombre de la marca`,
            description: `Descripcion del producto`,
            picture_url: "url de imagen",
            quantity: 1 as number,
            currency_id: "currency needed (ARS, USD, etc)",
            unit_price: producto.price as number
        }
        ],
      
        
    }
}