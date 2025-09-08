export function checkPrimitiveDataType(value: any, primitiveDataType: string) {

	switch (primitiveDataType) {
		case "string": return typeof value === "string";
		case "char": return typeof value === "string" && value.length === 1;
		case "int": return Number.isInteger(value);
		case "float": return typeof value === "number" && !Number.isInteger(value);
		case "double": return typeof value === "number";
		case "long": return Number.isInteger(value);
		case "byte": return Number.isInteger(value) && value >= 0 && value <= 255;
		case "boolean": return typeof value === "boolean";
		case "null": return value === null;
		case "unknown": return true;
		default: return false;
	}
}