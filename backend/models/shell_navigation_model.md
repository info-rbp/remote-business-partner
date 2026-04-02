# Shell Navigation Model

This document provides a structured, data-driven representation of the navigation for the Remote Business Partner application. This model is used by the backend to dynamically construct navigation menus and enforce access control based on user roles and application state.

## Navigation Structure

The navigation is defined as a list of navigation items, each with the following properties:

-   `surface`: The application area where the link is visible (`public`, `portal`, `admin`, `app`).
-   `route`: The absolute URL path for the navigation link.
-   `label`: The user-facing text for the link.
-   `required_role`: The minimum role required to view the link (placeholder).
-   `required_state`: The application state required for the link to be active (placeholder).

---

## Public Surface

| surface  | route                  | label          | required\_role | required\_state |
| -------- | ---------------------- | -------------- | -------------- | --------------- |
| `public` | `/`                    | Home           | `None`         | `None`          |
| `public` | `/about`               | About Us       | `None`         | `None`          |
| `public` | `/offers`              | Offers         | `None`         | `None`          |
| `public` | `/membership`          | Membership     | `None`         | `None`          |
| `public` | `/resources`           | Resources      | `None`         | `None`          |
| `public` | `/contact`             | Contact        | `None`         | `None`          |
| `public` | `/sign-in`             | Sign In        | `guest`        | `None`          |
| `public` | `/register`            | Register       | `guest`        | `None`          |

---

## App Surface

| surface | route               | label          | required\_role | required\_state    |
| ------- | ------------------- | -------------- | -------------- | ------------------ |
| `app`   | `/app/dashboard`    | Dashboard      | `user`         | `subscribed`       |
| `app`   | `/app/modules`      | Modules        | `user`         | `subscribed`       |
| `app`   | `/app/subscription` | Subscription   | `user`         | `None`             |
| `app`   | `/app/settings`     | Settings       | `user`         | `None`             |
| `app`   | `/app/support`      | Support        | `user`         | `None`             |
| `app`   | `/app/notifications`| Notifications  | `user`         | `None`             |

---

## Portal Surface

| surface  | route                  | label         | required\_role | required\_state |
| -------- | ---------------------- | ------------- | -------------- | --------------- |
| `portal` | `/portal/dashboard`    | Dashboard     | `client`       | `active`        |
| `portal` | `/portal/applications` | Applications  | `client`       | `active`        |
| `portal` | `/portal/billing`      | Billing       | `client`       | `active`        |
| `portal` | `/portal/membership`   | Membership    | `client`       | `active`        |
| `portal` | `/portal/profile`      | Profile       | `client`       | `active`        |
| `portal` | `/portal/resources`    | Resources     | `client`       | `active`        |
| `portal` | `/portal/security`     | Security      | `client`       | `active`        |
| `portal` | `/portal/support`      | Support       | `client`       | `active`        |
| `portal` | `/portal/team`         | Team          | `client`       | `active`        |

---

## Admin Surface

| surface  | route                   | label          | required\_role | required\_state |
| -------- | ----------------------- | -------------- | -------------- | --------------- |
| `admin`  | `/admin/dashboard`      | Dashboard      | `admin`        | `None`          |
| `admin`  | `/admin/applications`   | Applications   | `admin`        | `None`          |
| `admin`  | `/admin/audit`          | Audit Log      | `admin`        | `None`          |
| `admin`  | `/admin/billing`        | Billing        | `admin`        | `None`          |
| `admin`  | `/admin/content`        | Content        | `admin`        | `None`          |
| `admin`  | `/admin/customers`      | Customers      | `admin`        | `None`          |
| `admin`  | `/admin/docushare`      | DocuShare      | `admin`        | `None`          |
| `admin`  | `/admin/entitlements`   | Entitlements   | `admin`        | `None`          |
| `admin`  | `/admin/memberships`    | Memberships    | `admin`        | `None`          |
| `admin`  | `/admin/permissions`    | Permissions    | `admin`        | `None`          |
| `admin`  | `/admin/settings`       | Settings       | `admin`        | `None`          |
| `admin`  | `/admin/support`        | Support        | `admin`        | `None`          |
