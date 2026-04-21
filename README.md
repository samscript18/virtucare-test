# VirtuCare Take-Home Assessment

This project implements a simplified appointment booking flow using Next.js (App Router), TypeScript, and Tailwind CSS.

## Live Features

1. Doctors Listing Page

- Displays 6 doctors (more than the required 5)
- Each doctor card includes:
     - Name
     - Specialty
     - Available time slots
- Quick CTA to start booking with the selected doctor

2. Book Appointment Flow

- User can:
     - Choose doctor
     - Pick date
     - Pick time from available slots
     - Enter reason for visit
- Form validation for all required fields
- Prevents double-booking for the same doctor + date + time

3. Appointments Dashboard

- Lists all booked appointments with:
     - Doctor name
     - Date and time
     - Reason for visit
- Supports cancel/delete appointment
- Includes an empty state when no appointments are present

4. Persistence and UX

- Appointments persist after refresh using localStorage
- Responsive layouts for mobile and desktop
- Loading states, error boundary, and not-found page
- Clear top navigation between major routes

## Tech Stack

- Next.js 16 App Router
- TypeScript (strict mode)
- Tailwind CSS 4
- Vitest + Testing Library setup

## Folder Structure

- app/: routes, layout, loading/error/not-found
- components/: reusable UI components
- data/: mocked doctors data
- hooks/: appointment state management hook
- lib/: storage and booking utility functions
- types/: shared domain types
- tests/: unit tests

## Key Decisions

- localStorage for persistence:
     - Keeps scope backend-free while still preserving data after refresh.
- useSyncExternalStore for appointments:
     - Keeps state in sync with storage updates and avoids effect-based state loading anti-patterns.
- Hardcoded doctor seed data:
     - Makes the flow deterministic for an assessment environment.
- Intentional visual style:
     - Custom typography and color system to avoid generic template look.

## Challenges Faced

- None

## Running Locally

1. npm install
2. npm run dev

Open http://localhost:3000.

## Quality Checks

- npm run lint
- npm run test:run

## Notes

- No backend is used by design (assessment requirement).
- If you deploy to Vercel, no environment variables are required for this version.
