import { warn } from "../../utils/logger";
import { Token, TokenType } from "../../types";

import eat from "../functions/eat";

export default function expectValue(tokens: Token[], index: number, value: string) {

	const token: Token = eat(tokens, index);

	if (token.value !== value) {
		console.log("ERROR".red);
		return false;
	}

	return true;
}