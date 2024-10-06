const parseEnv = () => {
    const keys = Object.keys(process.env);
    keys.forEach(key => {
        if (key.includes('RSS_')) {
            console.log(`${key}=${process.env[key]}`);
        }
    });
};

parseEnv();