# Contributing to CampusFlow

## Development workflow
1. Install dependencies with `npm install`.
2. Run the app locally via `npm start`.
3. Execute the unit tests with `CI=true npm test -- --watch=false`.

## Coding guidelines
- Favor small, focused modules in the data layer (EngageApiClient, EventNormalizer, DedupeEngine, FilterEngine).
- Avoid broad rewrites; prefer incremental refactors.
- Keep accessibility in mind: label inputs, preserve keyboard focus, and announce dynamic updates when possible.
