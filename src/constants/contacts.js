import path from 'node:path';

const CWD = process.cwd();
export const PATH_DB = path.join(CWD, 'src', 'db', 'db.json');
