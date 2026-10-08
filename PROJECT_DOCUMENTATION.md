# CampusEats Dashboard

## Project Overview

CampusEats Dashboard is a React + Vite frontend for a campus food ordering experience. The project uses feature-based structure, reusable UI components, and client-side routing to deliver a responsive menu browsing and order flow.

## Key Features

- React 19 + Vite 8 frontend
- Client-side routing with `react-router-dom`
- Feature-based folder structure for menu domain logic
- Reusable UI components: `Button`, `Card`, `Spinner`, `TextField`, `Modal`
- Custom hooks: `useFetch` for data fetching and `useDebounce` for search input throttling
- Form validation with inline field errors
- Responsive grid layout and navbar layout
- Data loaded from `public/menu.json`

## Pages and Routes

- `/` — `HomePage` : Landing page with navigation cards and feature summary
- `/menu` — `MenuPage` : Dish search and menu listing page
- `/dish/:id` — `DishDetailPage` : Individual dish detail page with order form and confirmation
- `/order` — `OrderPage` : Standalone order form page
- `*` — 404 fallback page

## Layout

`App.jsx` configures nested routing under `AppLayout.jsx`.

- `AppLayout.jsx` renders the top navigation bar and an outlet for page content.
- `main.container` wraps page content for consistent spacing.

## Components

### UI Components

- `src/components/ui/Button.jsx` — reusable button variants (`primary`, `secondary`, `danger`, `ghost`)
- `src/components/ui/Card.jsx` — simple card container for consistent presentation
- `src/components/ui/Spinner.jsx` — loading indicator with label
- `src/components/ui/TextField.jsx` — input field with label and error text
- `src/components/ui/Modal.jsx` — compound modal component with header/body/footer

### Menu Feature Components

- `src/features/menu/components/MenuList.jsx` — renders a responsive grid of dishes
- `src/features/menu/components/DishCard.jsx` — shows a dish card with status badges and order action

## Hooks

- `src/features/menu/hooks/useFetch.js`
  - Fetches JSON data from a URL
  - Handles loading state, success data, and error state
  - Cancels updates if the component unmounts

- `src/features/menu/hooks/useDebounce.js`
  - Returns a debounced value after a timeout delay
  - Used by `MenuPage` to lower search update frequency

## Pages

### `src/pages/HomePage.jsx`

- Welcomes users to CampusEats
- Offers navigation to menu browsing and order placement
- Highlights project features and UI improvements

### `src/features/menu/pages/MenuPage.jsx`

- Fetches menu data from `/menu.json`
- Displays loading state and error alerts
- Filters dishes using a debounced search input
- Renders `MenuList` with matching dishes

### `src/features/menu/pages/DishDetailPage.jsx`

- Loads dish details by `id`
- Displays price, category, availability, and outlet info
- Contains an order form with validation and success confirmation

### `src/features/menu/pages/OrderPage.jsx`

- Presents a generic order form
- Validates name, email, and quantity
- Shows success confirmation on submit

## Data Source

- `public/menu.json`
- Contains menu items used by `useFetch`
- Example fields: `id`, `name`, `price`, `category`, `available`, `outlet`

## Styling and Theme

The project uses a custom theme defined in `src/index.css` and `src/App.css`.

- Primary colors: navy and orange
- Secondary accent: soft orange backgrounds
- Clean typography with modern spacing
- Responsive layout using CSS grid and flexible containers

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production bundle
- `npm run preview` — preview production build
- `npm run lint` — run `oxlint`

## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `vite`
- `@vitejs/plugin-react`
- `oxlint`
- `@types/react` and `@types/react-dom`

## Project Structure

```
src/
  App.jsx
  main.jsx
  App.css
  index.css
  pages/
    HomePage.jsx
  layouts/
    AppLayout.jsx
  components/
    ui/
      Button.jsx
      Card.jsx
      Spinner.jsx
      TextField.jsx
      Modal.jsx
  features/
    menu/
      components/
        DishCard.jsx
        MenuList.jsx
      hooks/
        useDebounce.js
        useFetch.js
      pages/
        MenuPage.jsx
        DishDetailPage.jsx
        OrderPage.jsx
public/
  menu.json
```

## Notes

- The project is already set up with modern React and Vite.
- The `Modal` component is ready for future dialog use even if not currently rendered.
- The current data model is static JSON; it can be extended to remote APIs later.

## Suggested Improvements

- Add persistent order storage or cart state
- Implement actual backend API integration
- Add unit and integration tests
- Add mobile navigation and accessibility improvements
- Introduce TypeScript for stronger type safety
