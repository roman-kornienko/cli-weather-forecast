export const getArgs = (args) => {
    let currentFlag = null;
    
    return args.slice(2).reduce((acc, arg) => {
        if (arg[0] === "-" && arg.length === 2) {
            // it is definatley a flag
            currentFlag = arg.substring(1);
            acc[currentFlag] = true;

            return acc;
        }
        acc[currentFlag] = acc[currentFlag] !== true ? `${acc[currentFlag]} ${arg}` : arg;
        return acc;
    }, {});
};
