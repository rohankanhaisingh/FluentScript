import testWhitespaceCase from "./testers/test-whitespace-case";
import testNumberCase from "./testers/test-number-case";

import { TokenType, Token } from "../types";

export function tokenize(input: string) {

	const tokens: Token[] = [];

	let i: number = 0;

	while (i < input.length) {

		const char = input.charAt(i);

		if (testWhitespaceCase(char)) { i++; continue; }

		if(testNumberCase(char)) {
			
			let num: string = "";

			while (/[0-9]/.test(input[i])) 
				num += input[i++];
			
			tokens.push({ type: TokenType.Number, value: num, position: i });

			continue;
		}
	}
}