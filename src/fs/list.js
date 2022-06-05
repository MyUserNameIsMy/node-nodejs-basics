import fs from 'fs';

export const list = async (dirPath) => {
    await fs.readdir(dirPath, (err, files) => {
        if (err) throw new Error('FS operation failed.');

        if(files.length>0)
            files.forEach(item => console.log(item));
    })
};

list('src/fs/files');