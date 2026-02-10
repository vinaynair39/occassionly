# CampusFlow

CampusFlow is a React-powered portal for Florida Tech students to browse upcoming campus events, search and filter them, and export details to personal calendars. The app ships with offline-friendly sample data and requires no external credentials to run.

## Prerequisites
- Node.js 16+
- npm

## Getting started
Install dependencies:
```bash
npm install
```

> Note: the previous Yarn lockfile was removed to avoid pinning deprecated
> versions of `node-sass`; use npm to ensure the updated dependency set is
> installed.

Run the development server:
```bash
npm start
```

Run the test suite:
```bash
CI=true npm test -- --watch=false
```

Create a production build:
```bash
npm run build
```

## Features
- All-events view sorted by start time with searchable titles and descriptions.
- Category and cost filters plus an accessible live result count.
- Detailed event pages with full descriptions, organizer and location info.
- Calendar exports via downloadable .ics files and Google Calendar links.
- Basic accessibility improvements, including labeled controls and a single main heading.

## Data
Sample events live at `src/data/events.js` and are loaded through `src/services/EventService.js`, which also normalizes and deduplicates entries.
