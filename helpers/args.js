export const getArgs = (args) => {
    let currentFlag = null;
    
    return args.reduce((acc, arg) => {
        if (arg[0] === "-" && arg.length === 2) {
            // it is definatley a flag
            currentFlag = arg.substring(1);
            acc[currentFlag] = true;

            if (currentFlag === 'h') {
                currentFlag = null;
            }

            return acc;
        }
        if (currentFlag) {
            acc[currentFlag] = arg;
            currentFlag = null;
            return acc;
        }
        return acc;
    }, {});
};
