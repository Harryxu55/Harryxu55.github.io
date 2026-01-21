# Ruida Business Consultancy Website

This is the official website for Ruida Business Consultancy, providing AI-powered digital intelligence integration solutions for businesses.

## Project Structure

The project is built with React, TypeScript, and Tailwind CSS using Vite as the build tool.

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in development mode at http://localhost:3000

### `pnpm build`

Builds the app for production to the `dist` directory. This command also ensures that the index.html file is correctly placed in the root of the dist directory.

### `pnpm preview`

Previews the production build locally at http://localhost:8080

### `pnpm serve-dist`

Serves the production build using http-server at http://localhost:8080

### `pnpm check-dist`

Displays the structure of the dist directory, showing all files and subdirectories with their sizes.

## Deployment Guide

1. Run `pnpm build` to create a production build
2. Check the dist directory structure with `pnpm check-dist`
3. The standard dist directory structure includes:
   - index.html (main entry point)
   - assets/ (contains CSS, JavaScript, and other static files)
   - Any other files generated during the build process
4. Upload all contents of the dist directory to your web server

## Local Testing

To test the production build locally:
1. Run `pnpm build` to create the production build
2. Run `pnpm preview` or `pnpm serve-dist` to start a local server
3. Open http://localhost:8080 in your browser to view the website

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (for animations)
- React Router (for routing)
- Lucide React (for icons)