/**
 * Tests if a character is a valid identifier part (alphanumeric, underscore, or hyphen).
 * @param char
 * @returns
 */
export default function testIdentifierPart(char: string) {
	return /[A-Za-z0-9_\-]/.test(char);
}