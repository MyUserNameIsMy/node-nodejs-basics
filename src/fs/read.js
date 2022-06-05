import fs from 'fs';

export const read = async (dirPath) => {
    fs.readFile(dirPath, 'utf8', (err, data) => {
        if (err?.code === 'ENOENT') {
            throw new Error('FS operation failed.')
        }
        if(data) console.log(data);
    });
};

read('src/fs/files/fileToRead.txt');