import testWhitespaceCase from "./testers/test-whitespace-case";

export function tokenize(input: string) {

	let i: number = 0;

	while (i < input.length) {

		const char = input.charAt(i);

		if (testWhitespaceCase(char)) { i++; continue; }


	}
}