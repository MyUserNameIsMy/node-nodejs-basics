import fs from 'fs'

export const read = async (filePath) => {
    const readable = fs.createReadStream(filePath);

    readable.on('error', (err) => {
        console.error(err.message);
    });

    readable.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

read('src/streams/files/fileToRead.txt');