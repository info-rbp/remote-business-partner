# Application Skeleton Blueprint

### Purpose and Capabilities

This document outlines the plan for building a comprehensive web application with four distinct surfaces: a public-facing website, a client portal, an admin portal, and an application layer. Each surface is designed to serve a specific audience and purpose, ensuring a clear and intuitive user experience.

### High-Level Product Model

The application is represented as a four-part experience:

*   **/ (Front-Facing Website):** The public commercial and explanatory surface.
*   **/portal (Client Portal):** The authenticated customer workspace.
*   **/admin (Admin Portal):** The internal operating console.
*   **/app (Application Layer):** A governed module system inside the platform shell.

---

## Build Plan

The construction of the application skeleton will be carried out in the following phases:

### Phase A: Shared Foundation

1.  **Global Design System:** Establish a consistent design system with reusable components, including page layouts, navigation, cards, and status indicators.
2.  **Shared Primitives:** Create a library of shared, reusable UI components (e.g., buttons, forms, tables).
3.  **Route Group Scaffolding:** Set up the routing for all four surfaces, ensuring a clear separation between public, client, admin, and application routes.
4.  **Shared Shell Language:** Create a shared shell language with variations for each surface, providing a consistent yet distinct user experience.
5.  **Status and Feedback Patterns:** Implement patterns for displaying various states (loading, empty, error, success).

### Phase B: Surface Shells

6.  **Front-Facing Website Shell:** Build the primary layout for the public-facing website, including the header, footer, and navigation.
7.  **Client Portal Shell:** Design the shell for the client portal, focusing on a secure and user-friendly authenticated experience.
8.  **Admin Portal Shell:** Create the shell for the admin portal, prioritizing an efficient and role-aware interface for internal users.
9.  **Application Layer Shell:** Develop the shell for the application layer, ensuring a governed and cohesive module system.

### Phase C: Core Navigation

10. **Public Navigation:** Implement the primary navigation and footer for the public website.
11. **Client Portal Navigation:** Build the navigation for the client portal.
12. **Admin Portal Navigation:** Create the navigation for the admin portal.
13. **Application Shell Navigation:** Design the navigation for the application layer.

### Phase D: MVP Screen Set

14. **Public Screens:** Home, Applications, Membership, Resources, Help, Sign In, Register.
15. **Client Screens:** Dashboard, Membership, Billing, Applications, Support.
16. **Admin Screens:** Dashboard, Content, Memberships/Entitlements, Applications, Customers, Billing, Analytics.
17. **App Shell Screens:** Dashboard, Modules, Subscription, Settings.

### Phase E: Secondary Screen Expansion

18. **Public Screens:** Offers, Contact, DocuShare.
19. **Client Screens:** DocuShare, Resources, Profile, Team, Security.
20. **Admin Screens:** DocuShare, Support, Permissions, Audit, Settings.
21. **App Shell Screens:** Individual module detail screen placeholders.

### Phase F: Screen-State Coverage

22. **Implement States:** Add loading, empty, error, restricted, pending, hold, and success states to all key screens.
23. **Route Guards:** Implement visual placeholders for route guards.
24. **Launch Methods:** Add display patterns for different application launch methods.

---

## Screen Inventory Checklist

### Front-Facing Website
- [ ] Home
- [ ] DocuShare
- [ ] Applications
- [ ] Membership
- [ ] Offers
- [ ] Resources
- [ ] Help
- [ ] Contact
- [ ] Sign In
- [ ] Register
- [ ] Forgot Password
- [ ] Reset Password
- [ ] Auth Callback

### Client Portal
- [ ] Dashboard
- [ ] Membership
- [ ] Billing
- [ ] DocuShare Access
- [ ] Applications
- [ ] Support
- [ ] Resources
- [ ] Profile
- [ ] Team
- [ ] Security

### Admin Portal
- [ ] Dashboard
- [ ] Content
- [ ] DocuShare
- [ ] Memberships
- [ ] Entitlements
- [ ] Applications
- [ ] Customers
- [ ] Support
- [ ] Billing
- [ ] Analytics
- [ ] Permissions
- [ ] Audit
- [ ] Settings

### Application Layer
- [ ] Dashboard
- [ ] Modules catalogue
- [ ] Customers
- [ ] Sales
- [ ] Operations
- [ ] Finance
- [ ] Lending
- [ ] Compliance
- [ ] People
- [ ] Support
- [ ] Knowledge
- [ ] Learning
- [ ] Communications
- [ ] Teams
- [ ] Insights
- [ ] Subscription
- [ ] Settings
