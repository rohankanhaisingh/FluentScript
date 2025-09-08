/**
 * Test if a character is a number (0-9)
 * @param char	
 * @returns {boolean}
 */
export default function testNumberCase(char: string): boolean {
	return (/[0-9]/.test(char));
}