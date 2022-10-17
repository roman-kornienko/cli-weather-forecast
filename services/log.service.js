import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
    console.error(`${chalk.bgRed('EROR')}: ${error}`);
};

export const printSuccess = (message) => {
    console.log(`${chalk.bgGreen('SUCCESS:')} ${message}`);
};

export const printHelp = () => {
    console.log(dedent
        `${chalk.bgCyan('HELP:')} 
        Without parameters: show weather
        -s [CITY] set city
        -h show help
        -t [API_KEY] set token
        `
    );
};