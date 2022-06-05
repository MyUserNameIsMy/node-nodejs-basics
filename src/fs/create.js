import { writeFile} from 'fs/promises';
import {open} from 'fs'
export const create = async (filePath) => {
    open(filePath, 'wx', (err)=>{
        if(err?.code === 'EEXIST')
            throw new Error('FS operation failed.');
        try {
            writeFile(filePath, 'I am fresh and young');
        }catch (err){
            throw new Error('FS operation failed.');
        }
    })
};
create('src/fs/files/fresh.txt');