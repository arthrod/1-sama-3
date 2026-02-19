import { createReader } from '@keystatic/core/reader';
import config from './keystatic.config';

const reader = createReader(process.cwd(), config);
const wines = await reader.collections.wines.all();
console.log('Wines:', wines.length);
