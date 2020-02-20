import jwt from 'jsonwebtoken';

require('dotenv').config();

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

/**
 * @description Encrypt value and save as a jwt with 8hr validity
 * period
 * @param {any} value
 * @return {any}
 */
export function encryptValue(value: string | object | undefined | null) {
  if (!value) return;

  try {
    /*
     * Remove the exp property to prevent
     * `value already has exp..` error
     */

    // eslint-disable-next-line no-param-reassign
    (value as any).exp && delete (value as any).exp;

    return jwt.sign(value, SECRET_KEY as jwt.Secret, {
      expiresIn: '8h',
    });
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log('ERR @encryption', error.message);
  }
}

/**
 * @description Decrypt token
 * @param {any} token
 * @return {any}
 */
export function decryptValue(token: string | undefined | null) {
  if (!token) return;

  try {
    return jwt.verify(token, SECRET_KEY as jwt.Secret);
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log('ERR @decryption', error.message);
  }
}
