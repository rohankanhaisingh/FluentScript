import peek from "../functions/peek";
import { Token, TokenType } from "../../types";

/**
 * Checks if the current token is the end of file (EOF) token.
 * @param tokens
 * @param index
 * @returns
 */
export default function isAtEndOfFile(tokens: Token[], index: number): boolean {

	const peekedToken = peek(tokens, index);

	return peekedToken.type === TokenType.EOF;
}