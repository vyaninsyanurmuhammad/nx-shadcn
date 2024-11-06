import { buildConfig } from '../../packages/utils-lib/src/tailwind.config';

console.log(__dirname)

console.log('Tailwind config:', buildConfig(__dirname));

export default buildConfig(__dirname);
