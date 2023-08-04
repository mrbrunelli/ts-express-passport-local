import bcrypt from "bcrypt";

export function hash(txt: string): Promise<string> {
  const salt = Number(process.env.BCRYPT_SALT);
  return bcrypt.hash(txt, salt);
}
