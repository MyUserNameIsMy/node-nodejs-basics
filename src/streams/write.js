import fs from 'fs';

export const write = async (writeFilePath) => {
    const writable = fs.createWriteStream(writeFilePath);

    process.stdin.on('error', err => {
        console.error(err.message());
    }).pipe(writable).on('error', err => {
        console.error(err.message);
    });
};

write('src/streams/files/fileToWrite.txt');