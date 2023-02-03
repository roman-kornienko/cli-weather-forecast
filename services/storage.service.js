import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';
import { printSuccess } from './log.service.js';

const filePath = join(homedir(), 'weather-data.json');

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
};

const readFile = async (path) => {
    return JSON.parse(await promises.readFile(path));
};

export const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        data = await readFile(filePath);
    }
    data[key] = value;
    return promises.writeFile(filePath, JSON.stringify(data));
};

export const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        data = await readFile(filePath);
        return data[key];
    }
    return undefined;
};