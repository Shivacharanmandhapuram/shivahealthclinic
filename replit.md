# Blessings Medical Clinic

## Overview

Blessings Medical Clinic is a patient-facing healthcare website built with React and TypeScript. The application serves as a digital presence for a family medicine practice, featuring information about services, doctor profiles, insurance acceptance, patient testimonials, and an AI-powered virtual assistant chatbot. The site emphasizes a "Compassionate Clinical" tone with a modern, clean design using a teal/sage/cream color palette.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6 for fast development and optimized production builds
- **Routing**: React Router DOM v7 for routing (single route "/" for homepage). All navigation uses anchor links with smooth scrolling (no page transitions)
- **Styling**: Tailwind CSS loaded via CDN with custom theme configuration (teal, sage, cream, coral color palette)
- **Icons**: Lucide React for consistent iconography throughout the application
- **Smooth Scrolling**: HTML configured with `scroll-behavior: smooth;` for professional navigation experience

### Component Structure
The application follows a true single-page application (SPA) pattern with all content on one page. Navigation uses anchor links for smooth scrolling instead of page routing:
- `Navbar` - Sticky navigation with mobile hamburger menu and smooth scroll anchor links
- `Hero` - Main landing section with call-to-action
- `About` - Clinic statistics and overview
- `MeetDoctor` - Doctor introduction card with "Discover Dr Gohokar's Impact" button
- `DoctorProfileSection` - Integrated doctor profile with carousel, USA initiatives, and India impact sections (id: `doctor-profile`)
- `Services` - Medical services grid
- `Insurance` - Accepted insurance plans display
- `Testimonials` - Patient reviews carousel
- `FAQ` - Expandable accordion for common questions
- `Contact` - Footer with contact information and CTA
- `Assistant` - Floating call-to-action button with soft nudge popup

### Call-to-Action Widget
- **Purpose**: Encourage patients to call the clinic for appointments
- **Features**: 
  - Radiating ripple animation to draw attention
  - Soft nudge card appears after 4 seconds with "Accepting New Patients" message
  - Direct phone call link (tel:6172515065)
  - Hover label showing "Call Now"
  - Badge with pinging animation for urgency

### Configuration
- TypeScript configured with ESNext modules, React JSX, and path aliases (`@/*`)
- Vite handles environment variable injection for API keys (`GEMINI_API_KEY`)
- Development server runs on port 5000 with open host access

## Recent Changes (December 23, 2025)

### Deployment Optimization
- **Created vercel.json**: Added Vercel deployment configuration with:
  - Rewrites: All non-file paths directed to `/index.html` for React Router SPA support
  - Clean URLs: Enabled for paths like `/about` without `.html` extension
  - Asset caching headers: Configured for optimized WebP, PNG, JPG, and other image formats

### Site Structure Refactor
- **Removed standalone page**: Eliminated `/aboutdr.nikhil` route and DoctorProfile page
- **Integrated doctor profile**: Content moved from DoctorProfile.tsx to new DoctorProfileSection.tsx component
- **SPA conversion**: Entire site now runs as single page with anchor link navigation
- **Navigation update**: Added "About Dr. Nikhil" nav item linking to #doctor-profile anchor
- **Button behavior**: "Discover Dr Gohokar's Impact" button now smoothly scrolls to doctor profile section instead of navigating to separate page
- **Asset organization**: Moved all WebP files to public folder for consistent asset serving
- **Benefits**: 
  - Eliminates 404 errors on page refresh
  - Faster user experience (no page loads, just smooth scrolling)
  - Mobile-friendly with natural scroll interactions

## External Dependencies

### APIs and Services
- **Google Gemini API**: Powers the AI virtual assistant chatbot. Requires `GEMINI_API_KEY` environment variable set in `.env.local`

### Key NPM Packages
- `@google/genai`: Official Google Generative AI SDK for Gemini integration
- `react-router-dom`: Client-side routing
- `lucide-react`: Icon library

### External Resources
- **Tailwind CSS**: Loaded via CDN (`cdn.tailwindcss.com`)
- **Google Fonts**: Inter (sans-serif) and Merriweather (serif) font families
- **Pravatar**: Placeholder avatar images for testimonials

### Static Assets
- Doctor profile image expected at `/dr.webp` with `/dr.png` fallback