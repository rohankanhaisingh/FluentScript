/**
 * Tests if the current character and the next character form a comment start.
 * @param char
 * @param input
 * @param position
 * @returns {boolean}
 */
export default function testCommentCase(char: string, input: string, position: number): boolean {

	return (char === "/" && input[position + 1] === "/");
}