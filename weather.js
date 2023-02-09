#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, saveData, getForecast, DATA_DICTIONARY } from "./services/index.js";

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args?.h) {
        printHelp();
    }
    if (args.t) {
        saveData(DATA_DICTIONARY.token, args.t);
    }
    if (args.c) {
        saveData(DATA_DICTIONARY.city, args.c);
    }
    getForecast();
};

initCLI();