import Buyer from "../../../models/Buyer";
import Seller from "../../../models/Seller";
import jwt from 'jsonwebtoken';
import dbConnect from "../../../lib/dbConnect";
import {serialize} from 'cookie';


export default async function loginHandler(req, res) {
  dbConnect();

  const {correo, clave} = req.body;

  console.log(correo);
  console.log(clave);
  let userExists = await Buyer.exists({'correo': correo, 'clave': clave});
  if (userExists) {
    const user = await Buyer.findOne({'correo': correo, 'clave': clave});
    let token = jwt.sign({
      usuario: user,
      tipo: 'comprador',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    }, 'secret');

    const serialized = serialize('miToken', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 1000*60*60*24,
      path: '/'
    });

    res.setHeader('Set-Cookie', serialized);
    return res.json('Login como comprador realizado con éxito.')
  };
  userExists = await Seller.exists({'correo': correo, 'clave': clave});
  if (userExists) {
    const user = await Seller.findOne({'correo': correo, 'clave': clave})
    let token = jwt.sign({
      usuario: user,
      tipo: 'vendedor',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    }, 'secret');

   const serialized = serialize('miToken', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 1000*60*60*24,
      path: '/'
    });

    res.setHeader('Set-Cookie', serialized);
    return res.json('Login como vendedor realizado con éxito.')
  }
  return res.json({status:'Usuario o contraseña invalida'})
}
