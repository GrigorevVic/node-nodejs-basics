import cp from 'child_process';

const spawnChildProcess = async (args) => {
    const child = cp.fork('./src/cp/files/script.js', args);

    child.on('exit', () => {
        console.log('child terminated')
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Jon Snow', 'Ned Stark', 'Sansa Stark']);
