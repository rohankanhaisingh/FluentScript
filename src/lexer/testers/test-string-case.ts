/**
 * Tests if a character is a string case (single or double quote).
 * @param char
 * @returns
 */
export default function testStringCase(char: string): boolean {
	return (char === "\"" || char === "'");
}