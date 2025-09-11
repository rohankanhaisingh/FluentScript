import fs from "fs";
import path from "path";
import colors from "colors";
import dotenv from "dotenv";

import { ROOT_PROJECT_PATH } from "./utils/constants";
import { warn, info } from "./utils/logger";
import { InbuiltMessageCodes } from "./utils/message-codes";

import { tokenize } from "./lexer/tokenizer";
import { initialize } from "./parser/parser";

import { Token } from "./types";

colors.enable();
dotenv.config({ path: path.join(ROOT_PROJECT_PATH, ".env"), quiet: true });

// Filter the input files from the command line arguments.
const inputFiles: string[] = process.argv.filter(function (arg: string) {

	if (!arg.endsWith(".fls")) return;

	// Check if the given input file exists.
	const fileDoesExist: boolean = fs.existsSync(arg);

	if (!fileDoesExist)
		return warn(InbuiltMessageCodes.WARNING_INPUT_FILE_NOT_FOUND, `Input file '${arg}' does not exist or may have been moved.`);

	return arg;
});

info(InbuiltMessageCodes.INFO_INPUT_FILES_FOUND, `Found ${inputFiles.length} input file(s).`);
info(InbuiltMessageCodes.INFO_PREPARING_TO_INTREPET_FILES, "Preparing to interpret the input file(s).");

inputFiles.forEach(function (filePath: string) {

	// Check if the file is allowed to read
	const fileContents: string = fs.readFileSync(filePath, "utf-8");

	const tokens: Token[] = tokenize(fileContents);
	const parser = initialize(tokens);
});