export enum TokenType {
	Number,
	String,
	Identifier,
	Keyword,
	DataType,
	Symbol,
	EOF
}

export interface Token {
	type: TokenType;
	value: string;
	position: number;
}

export interface TokenMap {
	name: string;
	description: string;
	keyword: string;
}