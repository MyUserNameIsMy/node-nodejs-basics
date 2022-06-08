import fs from 'fs'
import zlib from 'zlib'
import * as stream from "stream";

export const compress = async (inputFilePath, outputFilePath) => {
    stream.pipeline(
        fs.createReadStream(inputFilePath),
        zlib.createGzip(),
        fs.createWriteStream(outputFilePath),
        (err) => {
            if (err) console.error(err.message);
            else console.log('Finished.')
        }
    )
};

compress('src/zip/files/fileToCompress.txt', 'src/zip/files/archive.gz')