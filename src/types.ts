export type PrimitiveDataTypes = "string" | "char" | "int" | "float" | "double" | "long" | "byte" | "boolean" | "null" | "unknown" | "void";
export type ReservedKeywords = "func" | "var" | "const" | "if";

export enum TokenType {
	Number = "Number",
	String = "String",
	Identifier = "Identifier",
	Keyword = "Keyword",
	Operator = "Operator",
	Delimiter = "Delimiter",
	Whitespace = "Whitespace",
	Comment = "Comment",
	EOF = "EOF"
	Symbol = "Symbol"
}

export interface Token {
	type: TokenType;
	value: string;
	position: number;
}