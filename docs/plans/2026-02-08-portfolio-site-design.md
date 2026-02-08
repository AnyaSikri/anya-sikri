# Anya Sikri - Personal Portfolio Website Design

## Overview

A bold, creative personal brand website built with Next.js and deployed to Vercel.

## Structure

### Main Page (Single Scroll)
1. Hero
2. Resume
3. Projects (Technical + Ventures)
4. Berkeley Involvements

### Separate Page
- Beyond Work (Hiking, Writing, Startups to Watch, Social/Contact)

---

## Section Details

### 1. Hero

**Content:**
- Large, bold headline with name
- One-liner tagline (e.g., "Builder. Researcher. Explorer.")
- Subtle animated background or gradient
- Optional professional photo or stylized avatar
- CTA buttons: "See My Work" (scrolls to projects) + "Get in Touch"

**Design:**
- Dark background with vibrant accent colors (deep navy + electric blue, or charcoal + coral)
- Large typography, generous spacing
- Mobile-responsive

---

### 2. Resume

**Layout:** Card-based (not timeline)

**Each card includes:**
- Company logo (prominent)
- Role title + dates
- One main project or achievement (1-2 sentences)
- Tech stack tags (small pills)

**Visual approach:**
- Subtle hover effects (lift, glow, or color shift)
- Logos grayscale, colorize on hover
- "Download Full Resume" button at bottom
- 3-5 roles max, most recent first

---

### 3. Projects

**Layout:** Grid with featured project at top (full width), remaining in 2-3 column grid

**Split into two sub-sections:**
1. Technical Projects - Repos, apps, data pipelines, ML models
2. Ventures - Startups, business ideas, entrepreneurial projects

**Each card includes:**
- Thumbnail/screenshot
- Project name (bold)
- One-liner description
- Tags (type + tech)
- Links (GitHub, live demo)

**Interaction:**
- Hover reveals "View Project" overlay
- Click opens modal with more details

---

### 4. Berkeley Involvements

**Layout:** Two columns side by side (desktop), stacked (mobile)

**Left Column - Clubs & Organizations:**
- Club/org name + logo
- Role (President, Member, Founder, etc.)
- One line on contribution

**Right Column - Research & Academic:**
- Lab name or course
- Professor/advisor (optional)
- Brief description
- Links to papers/posters

**Visual:**
- Berkeley blue as accent color
- Smaller cards than Projects section
- Section header: "Where I Grew" or "The Berkeley Chapter"

---

### 5. Beyond Work (Separate Page)

**Four content blocks:**

**Hiking / Outdoors:**
- Photo gallery or carousel
- Trail names, locations, favorites list
- Visual-heavy, adventurous vibe

**Writing:**
- List of blog posts/essays/published pieces
- Title, one-line summary, link
- Or embedded blog feed

**Startups to Look Out For:**
- Curated list of exciting companies
- Company name + logo, why you're watching them

**Social / Connect:**
- Profile links (LinkedIn, GitHub, Twitter/X)
- Optional "what I'm up to now" blurb
- Contact form or email

**Design:**
- More playful and personal than main page
- Warmer colors or different accent
- Clear navigation back to main page

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Icons:** Lucide React

---

## Design System

**Colors:**
- Background: Dark (slate-900 or similar)
- Primary accent: Vibrant blue or coral
- Secondary: Muted complementary
- Text: White/gray hierarchy

**Typography:**
- Headlines: Bold, large sans-serif
- Body: Clean, readable
- Generous spacing throughout

**Components:**
- Cards with hover effects
- Pill-shaped tags
- Smooth scroll navigation
- Responsive grid layouts
