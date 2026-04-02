/**
 * @file Maps the repository manifest into a frontend-friendly ecosystem model.
 *
 * This utility reads the raw repos.manifest.json, parses it, and transforms it
 * into a typed array of EcosystemCapability objects that the UI can easily consume.
 */

import { readFileSync } from 'fs';
import path from 'path';
import { 
    RepositoryManifestItem, 
    EcosystemCapability, 
    TreatmentType, 
    ImplementationType, 
    SurfaceRelevance,
    LaunchMethod
} from './types';

// Path to the manifest file
const MANIFEST_PATH = path.join(process.cwd(), 'integrations/repo-manifest/repos.manifest.json');

/**
 * A simple mapping function to determine the ecosystem properties of a capability.
 * In a real application, this logic might be more complex or data-driven.
 */
function mapManifestItemToCapability(item: RepositoryManifestItem): EcosystemCapability {
    let treatmentType: TreatmentType = 'external_reference';
    let implementationType: ImplementationType = 'git_repository';
    let expectedLaunchPattern: LaunchMethod = 'redirect';
    let surfaceRelevance: SurfaceRelevance[] = ['all'];

    // Example logic to determine the properties based on manifest data
    switch (item.type) {
        case 'platform-native':
            treatmentType = 'native';
            implementationType = 'react_component';
            expectedLaunchPattern = 'native';
            break;
        case 'frappe-app':
            treatmentType = 'available_in_bench';
            implementationType = 'frappe_app';
            expectedLaunchPattern = 'sso'; // Or 'embed'
            break;
        case 'integration-pending':
            treatmentType = 'integration_pending';
            expectedLaunchPattern = 'none';
            break;
    }

    return {
        repositoryKey: item.key,
        moduleFamily: item.key, // For now, we'll use the key as the family
        treatmentType,
        expectedLaunchPattern,
        implementationType,
        surfaceRelevance,
        manifest: item,
    };
}

let _ecosystemData: EcosystemCapability[] | null = null;

/**
 * Reads, parses, and maps the repository manifest.
 * Caches the result in memory to avoid repeated file reads.
 *
 * @returns An array of EcosystemCapability objects.
 */
export function getEcosystemCapabilities(): EcosystemCapability[] {
    if (_ecosystemData) {
        return _ecosystemData;
    }

    try {
        const manifestContent = readFileSync(MANIFEST_PATH, 'utf-8');
        const manifestJson = JSON.parse(manifestContent);
        const manifestItems: RepositoryManifestItem[] = manifestJson.repositories;

        _ecosystemData = manifestItems.map(mapManifestItemToCapability);
        return _ecosystemData;
    } catch (error) {
        console.error("Failed to read or parse the repository manifest:", error);
        return []; // Return an empty array on error
    }
}
