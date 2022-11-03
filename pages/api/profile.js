import { jwtVerify } from 'jose';

export default async function profileHandler(req, res) {

  try {
    const {authToken} = req.cookies;
    const token = await jwtVerify(authToken, new TextEncoder().encode('secret'));
    return res.json({tipo: token.payload.tipo});
  } catch (error) {
    return res.status(401).json({error: 'invalid token'})
  }
}