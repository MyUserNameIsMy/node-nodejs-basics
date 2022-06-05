import fs from 'fs';

export const remove = async (filePath) => {
    fs.unlink(filePath, err => {
        if (err?.code === 'ENOENT') throw new Error('FS operation failed.')
    });
};

remove('src/fs/files/fileToRemove.txt');