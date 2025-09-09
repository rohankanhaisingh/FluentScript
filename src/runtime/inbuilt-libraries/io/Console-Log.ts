import { FunctionDescriptor } from "../../../types";

export default function ConsoleLog({ defaultArgument, args }: FunctionDescriptor) {
	console.log(defaultArgument);
}