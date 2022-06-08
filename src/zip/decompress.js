import fs from 'fs'
import zlib from 'zlib'
import * as stream from "stream";

export const decompress = async (inputFilePath, outputFilePath) => {
    stream.pipeline(
        fs.createReadStream(inputFilePath),
        zlib.createUnzip(),
        fs.createWriteStream(outputFilePath),
        (err) => {
            if (err) console.error(err.message);
            else console.log('Finished.')
        }
    )
};

decompress('src/zip/files/archive.gz', 'src/zip/files/decompressedFile.txt');