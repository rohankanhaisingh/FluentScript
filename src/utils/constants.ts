import path from "path";
import fs from "fs";

// Determine the root project path.
export const ROOT_PROJECT_PATH: string = path.join(__dirname, "../../");

export const TOKENS_DIRECOTORY_PATH: string = path.join(ROOT_PROJECT_PATH, "lexer", "tokens");