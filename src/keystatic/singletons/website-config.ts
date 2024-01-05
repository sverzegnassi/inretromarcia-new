// keystatic.config.ts
import { singleton } from '@keystatic/core';

export default singleton({
    label: 'Configurazione Sito Web',
    path: 'src/data/website-config',
    schema: {}
});