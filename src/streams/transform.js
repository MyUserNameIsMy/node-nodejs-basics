import * as stream from "stream";

export const transform = async () => {
    const reverseContent = new stream.Transform({
        transform(chunk, encoding, callback) {
            const reverseChunk = chunk.toString().split('').reverse().join('');
            this.push(reverseChunk+'\n');
            callback();
        }
    });

    process.stdin.pipe(reverseContent).pipe(process.stdout);
};

transform();