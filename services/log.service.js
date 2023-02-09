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
        -c [CITY] set city
        -h show help
        -t [API_KEY] set token
        `
    );
};

export const printWeather = (res) => {
    console.log(dedent
        `${chalk.bgYellow('WEATHER:')} 
        ${res.weather[0].description}
        tempreture is ${res.main.temp}
        feels like ${res.main.feels_like}
        `
    );
};