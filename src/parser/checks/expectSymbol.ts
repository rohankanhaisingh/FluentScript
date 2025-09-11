import { warn } from "../../utils/logger";
import { Token, TokenType } from "../../types";

import eat from "../functions/eat";

export default function expectSymbol(tokens: Token[], index: number, value: string): boolean {

	const token: Token = eat(tokens, index);

	if (token.type !== TokenType.Symbol || token.value !== value) {

		console.log("ERROR".red);
		return false;
	}

	return true;
}