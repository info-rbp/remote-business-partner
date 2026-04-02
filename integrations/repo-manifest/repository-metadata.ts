import type { ExternalRepository } from '@/lib/external/types';

/**
 * A registry of all external repositories that the platform is aware of.
 * This metadata provides a typed, deterministic source for understanding the role
 * and classification of each component in the ecosystem.
 *
 * It is governed by the process outlined in the README.md in this directory.
 */
export const repositoryMetadata: Record<string, ExternalRepository> = {
  'remote-business-partner': {
    canonicalKey: 'remote-business-partner',
    displayName: 'Remote Business Partner (UI)',
    purpose: 'The primary Next.js-based user interface for the platform. This is the main entry point for users.',
    integrationType: 'core-component',
    runtimeClassification: 'core',
    launchClassification: 'primary',
    surfaceVisibility: 'direct-link',
    status: 'active',
  },
  'frappe-bench-for-big-apps': {
    canonicalKey: 'frappe-bench-for-big-apps',
    displayName: 'Frappe Bench for Big Apps',
    purpose: 'The core Frappe backend, providing the ERPNext runtime and data storage. This is the system of record.',
    integrationType: 'core-component',
    runtimeClassification: 'core',
    launchClassification: 'primary',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'frappe_docker': {
    canonicalKey: 'frappe_docker',
    displayName: 'Frappe Docker',
    purpose: 'Provides the official Docker images and orchestration for deploying the Frappe environment.',
    integrationType: 'deployment-utility',
    runtimeClassification: 'support',
    launchClassification: 'support',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'erpnext': {
    canonicalKey: 'erpnext',
    displayName: 'ERPNext',
    purpose: 'The foundational ERP application built on the Frappe Framework. It provides the core business logic.',
    integrationType: 'core-component',
    runtimeClassification: 'core',
    launchClassification: 'primary',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'erpnext_gantt_goflow': {
    canonicalKey: 'erpnext_gantt_goflow',
    displayName: 'Gantt Chart (GoFlow)',
    purpose: 'A Frappe extension providing enhanced Gantt chart functionalities for project management.',
    integrationType: 'adapter',
    runtimeClassification: 'extension',
    launchClassification: 'secondary',
    surfaceVisibility: 'app-store',
    status: 'active',
  },
  'odoo-frappe-connector': {
    canonicalKey: 'odoo-frappe-connector',
    displayName: 'Odoo-Frappe Connector',
    purpose: 'A connector for synchronizing data between Frappe/ERPNext and Odoo.',
    integrationType: 'connector',
    runtimeClassification: 'service',
    launchClassification: 'secondary',
    surfaceVisibility: 'hidden',
    status: 'active',
    // TODO: The exact `runtimeClassification` needs verification. Assuming 'service' as it runs independently.
  },
  'frappe-external-authentik': {
    canonicalKey: 'frappe-external-authentik',
    displayName: 'Authentik Integration',
    purpose: 'Provides Authentik-based OpenID Connect authentication for the Frappe backend.',
    integrationType: 'connector',
    runtimeClassification: 'service',
    launchClassification: 'support',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'metabase-frappe-driver': {
    canonicalKey: 'metabase-frappe-driver',
    displayName: 'Metabase Frappe Driver',
    purpose: 'A driver enabling Metabase to connect to and query the Frappe/ERPNext database for analytics.',
    integrationType: 'connector',
    runtimeClassification: 'service',
    launchClassification: 'support',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
  'frappe-better-list-view': {
    canonicalKey: 'frappe-better-list-view',
    displayName: 'Better List View',
    purpose: 'A Frappe UI extension that enhances the default list views with more features.',
    integrationType: 'adapter',
    runtimeClassification: 'extension',
    launchClassification: 'secondary',
    surfaceVisibility: 'app-store',
    status: 'active',
  },
  'frappe-bigquery-connector': {
    canonicalKey: 'frappe-bigquery-connector',
    displayName: 'BigQuery Connector',
    purpose: 'A connector for exporting or streaming Frappe data to Google BigQuery for large-scale analytics.',
    integrationType: 'connector',
    runtimeClassification: 'service',
    launchClassification: 'secondary',
    surfaceVisibility: 'hidden',
    status: 'active',
  },
};
