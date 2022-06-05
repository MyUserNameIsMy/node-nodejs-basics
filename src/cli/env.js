export const parseEnv = (env) => {
    for (const [key, value] of Object.entries(env)) {
        if (key.startsWith('RSS_')) {
            console.log(key + '=' + value)
        }
    }
};

parseEnv(process.env);