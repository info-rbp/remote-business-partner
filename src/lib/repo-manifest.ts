import fs from 'fs';
import path from 'path';

const manifestPath = path.join(process.cwd(), 'integrations/repo-manifest/repos.manifest.json');

export function getRepoManifest() {
    const manifestData = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestData);
    return manifest;
}
