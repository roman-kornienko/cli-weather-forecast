export const getArgs = (args) => {
    let currentFlag = null;
    
    return args.reduce((acc, arg) => {
        if (arg[0] === "-") {
            currentFlag = arg;
            return {
                ...acc,
                [currentFlag.substring(1)]: true
            };
        }
        if (currentFlag) {
            const newFlag = {
                [currentFlag.substring(1)]: arg
            };
            currentFlag = null;
            
            return { ...acc, ...newFlag };
        }
    }, {});
};
