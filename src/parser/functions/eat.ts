import { Token } from "../../types";

/**
 * Eats a token from the tokens array at a given index and increments the index.
 * @param tokens
 * @param index
 * @returns
 */
export default function eat(tokens: Token[], index: number): Token {
	return tokens[index++];
}