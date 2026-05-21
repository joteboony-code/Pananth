import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(rootDir, 'public');

const filesToPublish = [
  'index.html',
  'tenant.html',
  'pair.html',
  'promptpay-rent-qr.jpg',
];

await mkdir(publicDir, { recursive: true });

for (const fileName of filesToPublish) {
  await copyFile(join(rootDir, fileName), join(publicDir, fileName));
  console.log(`synced ${fileName} -> public/${fileName}`);
}
