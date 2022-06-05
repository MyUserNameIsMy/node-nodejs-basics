import fs from 'fs'

export const rename = async (filePath) => {
    await fs.access('src/fs/files/properFilename.md', err=>{
        if(err?.code === 'ENOENT') {
            fs.rename(filePath, 'src/fs/files/properFilename.md', err => {
                if (err) throw new Error('FS operation failed.');
            });
        }else{
            throw new Error('FS operation failed.');
        }

    });
};

rename('src/fs/files/wrongFilename.txt');