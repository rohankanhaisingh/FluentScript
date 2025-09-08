import path from "path";
import fs from "fs";

import testWhitespaceCase from "./testers/test-whitespace-case";
import testNumberCase from "./testers/test-number-case";
import testCommentCase from "./testers/test-comment-case";
import testStringCase from "./testers/test-string-case";
import testIdentifierStart from "./testers/test-identifier-start";
import testIdentifierPart from "./testers/test-identifier-part";

import { TOKENS_DIRECOTORY_PATH } from "../utils/constants";
import { TokenType, Token, TokenMap } from "../types";

// Check if the directory where the tokens are stored exists.
if (!fs.existsSync(TOKENS_DIRECOTORY_PATH))
	throw new Error(`Tokens directory does not exist at path '${path.relative(process.cwd(), TOKENS_DIRECOTORY_PATH)}'.`);

const keywordsFilePath: string = path.join(TOKENS_DIRECOTORY_PATH, "keywords.json"),
	dataTypesFilePath: string = path.join(TOKENS_DIRECOTORY_PATH, "data-types.json");

if (!fs.existsSync(keywordsFilePath) || !fs.existsSync(dataTypesFilePath))
	throw new Error(`The required files 'keywords.json' and (or) 'data-types.json' could not be loaded because they don't exist or may have been moved.`);
	 
const keywords: string[] = [],
	dataTypes: string[] = [];

const keywordsFileContents: string = fs.readFileSync(keywordsFilePath, "utf-8"),
	dataTypesFileContents: string = fs.readFileSync(dataTypesFilePath, "utf-8");

const parsedKeywords: TokenMap[] = JSON.parse(keywordsFileContents),
	parsedDataTypes: TokenMap[] = JSON.parse(dataTypesFileContents);

const mappedKeywords: string[] = parsedKeywords.map((keyword: TokenMap) => keyword.keyword),
	mappedDataTypes: string[] = parsedDataTypes.map((dataType: TokenMap) => dataType.keyword);

export function tokenize(input: string): Token[] {

	const tokens: Token[] = [];

	let i: number = 0;

	while (i < input.length) {

		const char = input.charAt(i);

		// Check for whitespace
		if (testWhitespaceCase(char)) { i++; continue; }

		// Check for comments
		if (testCommentCase(char, input, i)) {

			while (i < input.length && input[i] !== "\n")
				i++; continue;
		}

		// Check for numbers
		if(testNumberCase(char)) {
			
			let num: string = "";

			while (/[0-9]/.test(input[i])) 
				num += input[i++];
			
			tokens.push({
				type: TokenType.Number,
				value: num,
				position: i
			});

			continue;
		}

		if (testStringCase(char)) {

			const quote: string = char;

			i++;

			let stringContents: string = "";

			while (i < input.length && input[i] !== quote) {
				stringContents += input[i++];
			}

			tokens.push({
				type: TokenType.String,
				value: stringContents,
				position: i
			});

			i++;
			continue;
		}

		if (testIdentifierStart(char) || char === "-") {

			let identifier: string = "";

			// Named argument prefix. For example "MyFunction -Arg1".
			if (char === "-")
				identifier + input[i++];

			while (testIdentifierPart(input[i]))
				identifier += input[i++];

			switch (true) {
				case (identifier.startsWith("-")): tokens.push({
					type: TokenType.Identifier,
					position: i,
					value: identifier
				}); break;
				case (mappedKeywords.includes(identifier)): tokens.push({
					type: TokenType.Keyword,
					position: i,
					value: identifier
				}); break;
				case (mappedDataTypes.includes(identifier)): tokens.push({
					type: TokenType.DataType,
					position: i,
					value: identifier
				})
			}

			continue;
		}
		tokens.push({
			type: TokenType.Symbol,
			position: i,
			value: char
		});

		i++;
	}

	tokens.push({
		type: TokenType.EOF,
		value: "",
		position: -1
	});

	return tokens;
}