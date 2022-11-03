import Buyer from "../../../models/Buyer";
import Seller from "../../../models/Seller";
import { SignJWT } from "jose";
import dbConnect from "../../../lib/dbConnect";
import { serialize } from 'cookie';

export default async function loginHandler(req, res) {
  await dbConnect();
  const {correo, clave} = req.body;

  console.log(correo);
  console.log(clave);
  let userExists = await Buyer.exists({'correo': correo, 'clave': clave});
  if (userExists) {
    const user = await Buyer.findOne({'correo': correo, 'clave': clave});
    let token = await new SignJWT({
      usuario: user,
      tipo: 'comprador',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    })
      .setProtectedHeader({ alg: 'HS256'})
      .setIssuedAt()
      .setExpirationTime('3h')
      .sign(new TextEncoder().encode('secret'));

    const serialized = serialize('authToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000*60*60*24,
      path: '/'
    });

    console.log(token);
    res.setHeader('Set-Cookie', serialized);
    return res.json('Login como comprador realizado con éxito.')
  }
  userExists = await Seller.exists({'correo': correo, 'clave': clave});
  if (userExists) {
    const user = await Seller.findOne({'correo': correo, 'clave': clave})
    let token = await new SignJWT({
      usuario: user,
      tipo: 'comprador',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    })
      .setProtectedHeader({ alg: 'HS256'})
      .setIssuedAt()
      .setExpirationTime('3h')
      .sign(new TextEncoder().encode('secret'));

   const serialized = serialize('authToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000*60*60*24,
      path: '/'
    });

    console.log(serialized);
    res.setHeader('Set-Cookie', serialized);
    return res.json('Login como vendedor realizado con éxito.')
  }
  return res.json({status:'Usuario o contraseña invalida'})
}
