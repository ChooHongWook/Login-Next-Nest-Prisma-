import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * Hashes a plain text password using bcrypt with a generated salt.
 * @param password The plain text password to hash
 * @returns The hashed password string
 */
export function hashPassword(password: string): string {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

/**
 * Verifies if a plain text password matches a hashed password.
 * @param password The plain text password to verify
 * @param hashedPassword The hashed password to compare against
 * @returns Boolean indicating if the passwords match
 */
export function verifyPassword(
  password: string,
  hashedPassword: string
): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}
