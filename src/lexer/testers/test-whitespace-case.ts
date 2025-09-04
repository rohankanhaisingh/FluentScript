/**
 * Test if the given character is a whitespace character.
 * @param char
 * @returns
 */
export default function testWhitespaceCase(char: string): boolean {
	return (/\s/.test(char));
}