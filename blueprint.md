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
## Current Task: User Authentication Backend

**Objective:** Implement the backend logic for user authentication to allow users to register and sign in to the platform.

**Steps:**

1.  **Backend Logic:** Implement the backend logic for user registration and login, including password hashing and session management. (In Progress)
2.  **Forgot/Reset Password:** Create the pages and logic for handling forgotten passwords.
3.  **Auth Callback:** Implement the logic to handle authentication callbacks from third-party providers.

---

## Build Plan

The construction of the application skeleton will be carried out in the following phases:

### Phase A: Shared Foundation (Completed)

1.  **Global Design System:** Established a consistent design system with reusable components, including page layouts, navigation, cards, and status indicators.
2.  **Shared Primitives:** Created a library of shared, reusable UI components (e.g., buttons, forms, tables).
3.  **Route Group Scaffolding:** Set up the routing for all four surfaces, ensuring a clear separation between public, client, admin, and application routes.
4.  **Shared Shell Language:** Created a shared shell language with variations for each surface, providing a consistent yet distinct user experience.
5.  **Status and Feedback Patterns:** Implemented patterns for displaying various states (loading, empty, error, success, warning, restricted, pending, hold).

### Phase B: Surface Shells (Completed)

6.  **Front-Facing Website Shell:** Built the primary layout for the public-facing website, including the header, footer, and navigation.
7.  **Client Portal Shell:** Designed the shell for the client portal, focusing on a secure and user-friendly authenticated experience.
8.  **Admin Portal Shell:** Created the shell for the admin portal, prioritizing an efficient and role-aware interface for internal users.
9.  **Application Layer Shell:** Developed the shell for the application layer, ensuring a governed and cohesive module system.

### Phase C: Core Navigation & Public Pages (Completed)

10. **Public Navigation:** Implemented the primary navigation and footer for the public website.
11. **Public Pages:** Created the following public-facing pages:
    *   Home Page: A welcoming landing page with a hero section, features, and a call to action.
    *   About Us: A page describing the company's mission and team.
    *   Contact Us: A page with a contact form and contact information.
    *   Offers: A page displaying a list of all available offers.
    *   Applications: A page showcasing the available applications.
    *   Membership: A page detailing the membership plans.
    *   Resources: A page with helpful resources.
    *   Help: A page for user support.
12. **Client Portal Navigation:** Build the navigation for the client portal.
13. **Admin Portal Navigation:** Create the navigation for the admin portal.
14. **Application Shell Navigation:** Design the navigation for the application layer.

### Phase D: User Authentication & MVP Screen Set (In Progress)

15. **User Authentication:**
    *   **Registration Page:** Created the user registration page with a form to collect user details.
    *   **Login Page:** Created the user login page with a form for authentication.
    *   **Backend Logic (Next):** Implement the backend logic for user registration and login, including password hashing and session management.
16. **Public Screens:** Home, Applications, Membership, Resources, Help, Sign In, Register. (Completed)
17. **Client Screens:** Dashboard, Membership, Billing, Applications, Support.
18. **Admin Screens:** Dashboard, Content, Memberships/Entitlements, Applications, Customers, Billing, Analytics.
19. **App Shell Screens:** Dashboard, Modules, Subscription, Settings.

### Phase E: Secondary Screen Expansion

20. **Public Screens:** Offers, Contact, DocuShare.
21. **Client Screens:** DocuShare, Resources, Profile, Team, Security.
22. **Admin Screens:** DocuShare, Support, Permissions, Audit, Settings.
23. **App Shell Screens:** Individual module detail screen placeholders.

### Phase F: Screen-State Coverage

24. **Implement States:** Add loading, empty, error, restricted, pending, hold, and success states to all key screens. The necessary components for these states are now created.
25. **Route Guards:** Implement visual placeholders for route guards.
26. **Launch Methods:** Add display patterns for different application launch methods.

---

## Screen Inventory Checklist

### Front-Facing Website
- [x] Home
- [x] DocuShare
- [x] Applications
- [x] Membership
- [x] Offers
- [x] Resources
- [x] Help
- [x] Contact
- [x] Sign In (Login)
- [x] Register
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
