import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(req) {
  const url = req.url;
  const authToken = req.cookies.get('authToken');

  if (url.includes('/publicar')) {
    const token = await jwtVerify(authToken, new TextEncoder().encode('secret'));
    const {tipo} = token.payload;
    if (tipo == 'comprador') {
      return NextResponse.rewrite(new URL('/error-permisos', url));
    }
    return NextResponse.next();
  }
}