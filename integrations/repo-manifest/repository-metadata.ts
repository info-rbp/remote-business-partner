import type { ExternalRepository } from '@/lib/external/types';
import manifestData from './repos.manifest.json';

/**
 * A registry of all external repositories that the platform is aware of.
 * This metadata provides a typed, deterministic source for understanding the role
 * and classification of each component in the ecosystem.
 *
 * It is governed by the repos.manifest.json file and mapped to the ExternalRepository type.
 */
export const repositoryMetadata: Record<string, ExternalRepository> = manifestData.repositories.reduce(
  (acc: Record<string, ExternalRepository>, repo: any) => {
    // Type assertion with validation could be added here in a more robust scenario,
    // but we enforce the types by ensuring the payload matches ExternalRepository.
    acc[repo.key] = {
      name: repo.name,
      key: repo.key,
      url: repo.url,
      type: repo.type as ExternalRepository['type'],
      purpose: repo.purpose,
      notes: repo.notes,
    };
    return acc;
  },
  {}
);
