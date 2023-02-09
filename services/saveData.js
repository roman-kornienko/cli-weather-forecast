import { printSuccess, printError } from './log.service.js'
import { saveKeyValue } from './storage.service.js';

export const saveData = async (key, data) => {
    if (!data?.length) {
        printError(`${key} is not correct!`);
        return;
    }
    try {
        await saveKeyValue(key, data);
        printSuccess('File successfuly updated!');
    } catch (error) {
        printError(error.message);
    }
}