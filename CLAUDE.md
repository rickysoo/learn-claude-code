# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pure HTML/CSS/JavaScript educational web application called "Learn Claude Code" that teaches users 36 essential tips for using Claude Code across three skill levels. The app features a modern Claude.ai-inspired design with dark/light theme support and interactive musical feedback.

## Development Commands

Since this is a static web application, there are no build tools or package managers:

- **Open the app**: Simply open `index.html` in a web browser
- **Deploy**: The app is deployed to Vercel and configured with `vercel.json`
- **Test**: Manual testing by opening `index.html` locally

## Architecture

### File Structure
- `index.html` - Main application markup with SEO optimization
- `script.js` - Application logic, tip data, theme system, and Web Audio API integration
- `styles.css` - CSS with Claude.ai-inspired theming system
- `tips.md` - Markdown version of all 36 tips (reference only)
- `vercel.json` - Deployment configuration with security headers

### Key Components

**Theming System**: CSS custom properties with automatic dark/light theme switching. Default is dark mode to match Claude.ai.

**Tip Management**: Tips are organized in three levels (beginner, intermediate, advanced) with 12 tips each. Each tip includes:
- Unique ID, icon, title, and summary
- Expandable content with documentation links
- Level-specific color coding (9-color palette)

**Audio System**: Web Audio API implementation with:
- Level-specific musical themes (C Major for beginner, F Major for intermediate, G Major for advanced)
- Context-aware sound effects for expand/collapse actions
- User-controlled sound toggle

**Keyboard Shortcuts**:
- Numbers 1-3: Switch between levels
- 'T': Toggle theme
- 'S': Toggle sound

### Theme Variables
The CSS uses Claude.ai's authentic color palette with CSS custom properties for theming. Key colors:
- Primary: `--claude-orange` (#D2691E)
- Card differentiation: 9-color palette cycling through levels

## Content Guidelines

All tips link to official Claude Code documentation at `docs.anthropic.com/en/docs/claude-code/`. The content maintains an encouraging, beginner-friendly tone while covering progressively advanced topics.

## Deployment

The app is configured for Vercel deployment with security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection) and URL rewriting to serve `index.html` for all routes.