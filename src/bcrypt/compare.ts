import bcrypt from "bcrypt";

export function compare(txt: string, hash: string): Promise<boolean> {
  return bcrypt.compare(txt, hash);
}
