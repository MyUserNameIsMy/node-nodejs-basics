import path from 'path'
import {release, version} from 'os';
import {createServer as createServerHttp}  from 'http';
import * as hello from './files/c'
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = './files/a.json';
} else {
    unknownObject = './files/b.json';
}

import(unknownObject).then(module => {
    module.default();
})


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});



