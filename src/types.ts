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

export interface Program {
	type: "Program",
	body: Statement[];
}

export interface Parameter {
	name: string;
	parameterType?: TypeRef;
};

export interface FunctionParameter {
	name: string;
	value?: any;
}

export interface FunctionDescriptor {
	args: FunctionParameter[];
	defaultArgument?: any;
}

export type TypeRef =
	| { kind: "BuiltIn", name: string }
	| { kind: "Array", element: TypeRef }
	| { kind: "Tuple", elements: TypeRef[] }
	| { kind: "Function", parameters: TypeRef[], returnType: TypeRef }
	| { kind: "Custom", name: string };

export type Statement =
	| { type: "FunctionDeclaration"; name: string; parameters: Parameter[]; returnType?: TypeRef; body: Statement[] }
	| { type: "VariableDeclaration"; name: string; variableType?: TypeRef; value: Expression }
	| { type: "ExpressionStatement"; expr: Expression }
	| { type: "ReturnStatement"; value?: Expression };

export type Expression =
  | { type: "NumberLiteral"; value: number }
  | { type: "StringLiteral"; value: string }
  | { type: "Identifier"; name: string }
	| { type: "BinaryExpression"; operator: string; left: Expression; right: Expression }
	| { type: "CallExpression"; callee: string; args: Expression[]; named: Record<string, Expression> }