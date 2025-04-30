# Air BnB App

This is a mobile application project built with Expo and React Native.

## Getting Started

To get started with this project, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/zawwinhuttt/RealEstateX.git
    cd RealEstateX
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install or bun install
    ```
3.  **Run the application:**
    ```bash
    npm start # or yarn start or bun start
    ```
    This will start the Expo development server. You can then open the app on your physical device using the Expo Go app or in a simulator/emulator.

## Project Structure

The project follows a standard Expo/React Native structure:

-   `app/`: Contains the main application screens and navigation.
    -   `(tabs)/`: Screens for the bottom tab navigator (inbox, index, profile, wishlists).
    -   `listing/[id].tsx`: Dynamic screen for individual listing details.
    -   `search/`: Screens related to the search flow (date, guests).
    -   `_layout.tsx`: Root layout for the app navigation.
-   `assets/`: Static assets like images.
-   `components/`: Reusable UI components (e.g., `ListingCard.tsx`, `SearchBar.tsx`).
-   `constants/`: Application-wide constants (e.g., `colors.ts`).
-   `context/`: React context providers (e.g., `FavoritesContext.tsx`).
-   `lib/`: Utility functions or libraries (e.g., `supabase.ts`).
-   `mocks/`: Mock data (e.g., `listings.ts`).
-   `types/`: TypeScript type definitions (e.g., `listing.ts`).
-   `app.json`: Expo configuration file.
-   `package.json`: Project dependencies and scripts.
-   `tsconfig.json`: TypeScript configuration.
-   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
-   `eas.json`: Configuration for Expo Application Services.
-   `vercel.json`: Configuration for Vercel deployment (if applicable).

## Contributing

Guidelines for contributing to the project. 

## License

Information about the project's license. 