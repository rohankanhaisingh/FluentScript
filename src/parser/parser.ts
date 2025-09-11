import { Parameter, Statement, Token, TokenType } from "../types";
import { error } from "../utils/logger";
import { InbuiltMessageCodes } from "../utils/message-codes";

import peek from "./functions/peek";
import eat from "./functions/eat"; 

import expectSymbol from "./checks/expectSymbol";
import expectValue from "./checks/expectValue";
import isAtEndOfFile from "./checks/isAtEndOfFile";

function parseStatement(tokens: Token[], index: number) {

	const token: Token = peek(tokens, index);

	if (token.type === TokenType.Keyword) {
		switch (token.value) {
			case "func": return parseFunctionDeclaration(tokens, index, token);
		}
	}
}

function parseFunctionDeclaration(tokens: Token[], index: number, currentToken: Token) {

	const expectsTokenValue: boolean = expectValue(tokens, index, "func");

	if (!expectsTokenValue)
		return error(InbuiltMessageCodes.ERROR_FUNCTION_KEYWORD_MISSING, `Expected 'func' at ${currentToken.position}. Received ${currentToken.value}`);

	const nameToken: Token = eat(tokens, ++index);

	if (nameToken.type !== TokenType.Identifier) 
		return error(InbuiltMessageCodes.ERROR_FUNCTION_NAME_MISSING, `Expected function name at ${nameToken.position}. Received ${nameToken.value}`);

	const name: string = nameToken.value;

	const parameters: Parameter[] = [];
}

export function initialize(tokens: Token[]) {

	let index: number = 0;

	const body: Statement[] = [];

	while (!isAtEndOfFile(tokens, index)) {

		parseStatement(tokens, index);

		index += 1;
	}

	return {
		type: "Program",
		body
	}
}