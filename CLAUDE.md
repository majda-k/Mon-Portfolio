# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React portfolio website for Majda Kamrain, a full-stack web developer. The project uses React 19, Vite, and Tailwind CSS 4 with a sophisticated design system featuring glassmorphism effects and gradient themes.

## Development Commands

- `npm run dev` - Start development server (typically runs on port 5173, will auto-increment if port is busy)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

## Architecture & Design System

### Component Structure
The application follows a single-page layout with these main sections:
- **Header**: Sticky navigation with glassmorphism backdrop blur
- **Resume**: Hero section with profile image, introduction, and CTA buttons
- **Skills**: Interactive grid of technology icons with hover effects
- **Projects**: Card-based project showcase with GitHub links
- **ContactUs**: Contact form using EmailJS integration
- **Footer**: Social links and copyright information

### Styling Approach
- **CSS Variables**: Defined in `src/App.css` with consistent color tokens (`--primary-gradient`, `--bg-dark`, etc.)
- **Utility Classes**: Custom classes like `.text-gradient`, `.hover-lift`, `.glass-effect`, `.fade-in`
- **Theme**: Purple gradient theme (#667eea to #764ba2) with dark background (#0a0e27 to #151930)
- **Responsive**: Mobile-first approach using CSS Grid and Flexbox

### Key Design Patterns
- **Glassmorphism**: `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- **Hover Effects**: Transform animations with color transitions and glow effects
- **Gradient Text**: Using `-webkit-background-clip: text` for gradient typography
- **Floating Animations**: CSS keyframes for subtle movement effects

## EmailJS Integration

The contact form uses EmailJS with these configuration IDs:
- Service ID: `service_sy1r6fo`
- Template ID: `template_rnredwb`
- Public Key: `NWu_3qjbzkpnxMejs`

## Asset Management

- **Profile Image**: `/logo.jpg` (referenced without `/public/` prefix)
- **Technology Icons**: Located in `/public/icons/` directory
- **CV File**: `/KAMRAINMajdacv.pdf` for download functionality

## Content Updates

To update portfolio content:
- **Personal Info**: Modify `src/components/Resume.jsx`
- **Skills/Technologies**: Update the skills array in `src/components/skills.jsx`
- **Projects**: Edit the projects array in `src/components/projects.jsx`
- **Contact Info**: Update social links in header.jsx and footer.jsx

## Styling Guidelines

When making style changes:
- Use the established CSS custom properties for consistency
- Maintain the glassmorphism aesthetic with backdrop-blur effects
- Follow the purple gradient color scheme
- Ensure responsive behavior with flexbox/grid layouts
- Add hover animations for interactive elements