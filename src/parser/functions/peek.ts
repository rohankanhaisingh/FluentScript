import { Token } from "../../types";

/**
 * Peeks at a token in the tokens array at a given index with an optional offset.
 * @param tokens
 * @param index
 * @param offset
 */
export default function peek(tokens: Token[], index: number, offset: number = 0): Token {
	return tokens[index + offset];
}