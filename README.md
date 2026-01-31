# Hetav Shah - Portfolio Website

> A production-grade portfolio showcasing systems & platform engineering expertise

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Vite
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark Mode**: Theme toggle with localStorage persistence
- **Component Architecture**: Well-organized, reusable components
- **Type Safety**: Strict TypeScript configuration
- **Production Optimized**: Code splitting, minification, asset hashing
- **Zero CDN Dependencies**: All dependencies bundled and optimized

## 📁 Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks (useTheme)
├── constants/          # Application data & constants
├── types/              # TypeScript interfaces
├── styles/             # Global CSS & Tailwind imports
├── App.tsx             # Main app component
└── index.tsx           # React entry point

Configuration:
├── tailwind.config.ts  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── vite.config.ts      # Vite build config
└── tsconfig.json       # TypeScript config
```

## 📚 Documentation

- **[PRODUCTION_README.md](./PRODUCTION_README.md)** - Complete production setup guide
- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)** - Migration from CDN to production build

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Alias for type-check |

## 🎨 Key Components

- **Nav** - Navigation with mobile menu and theme toggle
- **Hero** - Main landing section
- **ProjectSection** - Reusable project showcase
- **SkillsNarrative** - Organized skill categories
- **AcademicInfo** - Education and certifications
- **Footer** - Contact section with live metrics

## 📦 Dependencies

### Production
- `react@^19.2.4` - UI library
- `react-dom@^19.2.4` - DOM rendering
- `lucide-react@^0.563.0` - Icon library
- `tailwindcss@^3.4.17` - Utility-first CSS
- `postcss@^8.4.47` - CSS processing

### Development
- `vite@^6.2.0` - Build tool & dev server
- `typescript@~5.8.2` - Type checking
- `@vitejs/plugin-react@^5.0.0` - React support in Vite

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📊 Performance

- **Bundle Size**: ~50KB gzipped (main + vendor)
- **CSS**: ~8KB minified (tree-shaken utilities)
- **Code Split**: Separate vendor chunks for React & Lucide
- **Load Time**: Optimized with asset hashing & caching

## 🚢 Deployment

Ready to deploy on:
- **Vercel** - Recommended
- **Netlify**
- **GitHub Pages**
- **Traditional servers**
- **Docker containers**

See [PRODUCTION_README.md](./PRODUCTION_README.md#deployment) for detailed instructions.

## 🔧 Development

### Type Checking
```bash
npm run type-check
```

### Code Organization
- Each component in its own file
- Hooks in `src/hooks/`
- Types in `src/types/`
- Data in `src/constants/`
- Styles in `src/styles/`

### Component Template
```tsx
import React from 'react';

interface ComponentProps {
  // Define props
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  return (
    // JSX
  );
};
```

## 📖 Documentation

### Configuration Files
- `tailwind.config.ts` - Tailwind theme customization
- `postcss.config.js` - PostCSS and Autoprefixer setup
- `vite.config.ts` - Build and dev server configuration
- `tsconfig.json` - TypeScript compiler options

### Environment Variables
Copy `.env.example` to `.env.local` and customize:
```env
VITE_APP_NAME="Hetav Shah Portfolio"
VITE_APP_ENV="development"
```

## 🔒 Type Safety

- Strict TypeScript mode enabled
- All components typed
- Interfaces for data structures
- Better IDE support

## 📝 Content Updates

Update portfolio content in `src/constants/data.ts`:
```typescript
export const portfolioData: PortfolioData = {
  personal: { /* ... */ },
  education: [ /* ... */ ],
  skills: { /* ... */ },
  // etc.
};
```

## 🌙 Theme

The application supports light/dark mode:
- Toggle with button in navigation
- Persists in localStorage
- Uses Tailwind CSS dark mode class strategy
- Smooth transitions between themes

## ✅ Production Checklist

- [x] Component separation
- [x] TypeScript strict mode
- [x] Tailwind CSS local installation
- [x] Environment configuration
- [x] Build optimization
- [x] Type safety
- [x] Responsive design
- [x] Performance optimization
- [x] Documentation

## 📞 Contact

- **Email**: hetavshah1705@gmail.com
- **LinkedIn**: https://linkedin.com/in/hetav1705
- **GitHub**: https://github.com/HetavShah

## 📄 License

Personal portfolio - All rights reserved.
