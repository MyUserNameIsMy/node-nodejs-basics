import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, 'files');

export const copy = async (dirPath) => {
    fs.access(dirPath, (err) => {
        if (err?.code === 'ENOENT') throw new Error('FS operation failed.');
    });

    fs.promises.mkdir(path.join(dirPath, '..', 'files_copy')).catch(err => {
        if (err?.code === 'EEXIST') throw new Error('FS operation failed.');
    });

    fs.readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed.');

        for (const file of files) {
            fs.copyFile(path.join(dirPath, file), path.join(dirPath, '..', 'files_copy', file), err => {
                if (err) throw new Error(err.toString());
            })
        }
    })
};
copy(dirPath);