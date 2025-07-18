# Portfolio
A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a clean design with smooth animations and dark/light theme support.

## Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for delightful user interactions
- **UI Components**: Radix UI for accessible, unstyled components
- **Theme Support**: Dark/light mode with smooth transitions
- **Fast Performance**: Optimized build with Vite
- **Static Deployment**: Ready for deployment on Vercel, Netlify, etc.

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahdin70/Revamped-Portfolio.git
cd Revamped-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check with TypeScript
- `npm run lint` - Lint code with ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite framework and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── data/         # Static data and content
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   ├── pages/        # Page components
│   │   └── ...
│   ├── index.html
│   └── ...
├── dist/                 # Production build output
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── ...
```
