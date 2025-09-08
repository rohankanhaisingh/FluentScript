/**
 * Tests if a character is a valid identifier start character.
 * @param char
 * @returns
 */
export default function testIdentifierStart(char: string): boolean {
	return /[A-Za-z_]/.test(char);
}