export const screateLogger = name => {
    const logs = [];
    return {
        log(message) {
            logs.push(`log - ${name} - ${message}`)
        },
        error(message) {
            logs.push(`log - ${name} - ${message}`)
        },
        getLogs() {
            return logs;
        }

    };
};