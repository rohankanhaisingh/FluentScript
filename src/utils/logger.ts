import { InbuiltMessageCodes } from "../utils/message-codes";

export let warningLogCount: number = 0;
export let errorLogCount: number = 0;

function formatDate(): string {

	const now = new Date();

	return `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] `.white;
}

export function warn(messageCode: InbuiltMessageCodes, message: string) {

	warningLogCount += 1;

	return console.log(formatDate() + `(${warningLogCount}) Warning `.yellow + `[${messageCode}]`.blue + ": ".grey + message.gray);
}

export function info(messageCode: InbuiltMessageCodes, message: string) {

	warningLogCount += 1;

	return console.log(formatDate() + `Info `.white + `[${messageCode}]`.blue + ": ".grey + message.gray);
}