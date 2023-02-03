#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, saveToken } from "./services/index.js";

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args?.h) {
        printHelp();
    }
    if (args.t) {
        saveToken(args.t);
    }
};

initCLI();