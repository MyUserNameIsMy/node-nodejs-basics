import path from 'path'
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from 'url';
import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);

const random = Math.random();

const unknownObject = (random > 0.5) ? require('./files/a.json') : require('./files/b.json');

export default unknownObject;

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



