import { printSuccess, printError } from './log.service.js'
import { saveKeyValue } from './storage.service.js';

export const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('File successfuly updated!');
    } catch (error) {
        printError(error.message);
    }
}