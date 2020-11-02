import { sign, verify } from 'jsonwebtoken';

const { AUTH_JWT_SECRET } = process.env;
//
if (!AUTH_JWT_SECRET || typeof AUTH_JWT_SECRET !== 'string') {
  throw new Error('You must provide auth-jwt secret to start server');
}
if (AUTH_JWT_SECRET.length < 32) {
  throw new Error('Auth JWT secret must have at least 32 symbols');
}
const jwtSecret = Buffer.from(AUTH_JWT_SECRET, 'hex');

export function encodeJWT(
  payload: { [k: string]: any },
  secret: string | Buffer = jwtSecret,
): string {
  return sign(payload, secret, {
    algorithm: 'HS512',
  });
}
export function decodeJWT(
  token: string,
  secret: string | Buffer = jwtSecret,
): string | { [k: string]: any } {
  return verify(token, secret, {
    algorithms: ['HS512', 'HS256'], // HS256 is deprecated (will be removed later)
  });
}
