# Next.js Product Listing & Details Application

This is a simplified Product Listing & Details Application built using Next.js 15, React 19, and TypeScript. The application allows users to browse a list of products, view detailed information about each product, and includes basic search and filter capabilities.

## Features

- **Product List Page**: Displays a list of products with their thumbnails, names, prices. Users can search for products and filter them by category.
- **Product Detail Page**: Provides detailed information about a selected product including thumbnail, name, price, category and rating.
- **Dynamic Routing**: Utilizes Next.js dynamic routing for product detail pages.
- **Loading Skeletons**: Implements loading skeletons for better user experience while data is being fetched.
- **Error Handling**: Gracefully handles errors during data fetching.

## Tech Stack

- **Next.js 15**: For server-side rendering and routing.
- **React 19**: For building user interfaces.
- **TypeScript**: For type safety and better development experience.

## Optional Tools

- **Jest**: For unit testing.
- **React Testing Library**: For testing React components.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/dbaronov/pupefo
   cd pupefo
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Testing

1. Execute tests:
   ```
   npm run test
   ```

## Trade-offs
   lack of styling / framework for that, as was short on time
   some of other parts like pagitation could be their own component

## Time spent
   around 4 hours
