import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async (filePath) => {
    const fileBuffer = await fs.promises.readFile(filePath).catch(err => {
        if (err?.code === 'ENOENT') throw new Error('Failed to read file.')
    });

    const hashSum = crypto.createHash('sha256');

    hashSum.update(fileBuffer);

    return hashSum.digest('hex');

};
console.log(await calculateHash('src/hash/files/fileToCalculateHashFord.txt'));