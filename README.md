# Genesis - First-Gen Literary Magazine

A beautiful, modern website for the Genesis literary magazine at Boston College, featuring a Prometheus-inspired blood orange theme.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Elegant navigation between sections
- **Photo Carousel**: Showcase your poems, pictures, and artwork
- **Interactive Forms**: Contact and submission forms with validation
- **Prometheus Theme**: Blood orange color scheme with flame effects
- **Modern UI**: Clean, professional design with smooth animations

## Sections

1. **Home**: Hero section with Genesis title and scrollable layout
2. **About Us**: Information about the magazine and community
3. **Contact**: Contact form and information
4. **Submit**: Submission form for new works

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Customization

### Adding Your Logo

1. Place your logo file in the `public` folder
2. Update the logo reference in `src/components/Navigation.js`

### Adding Your Images

1. Replace the sample images in the carousel with your own
2. Update the `images` array in `src/components/Carousel.js`

### Customizing Colors

The blood orange theme can be customized by updating the CSS variables in the component files:
- Primary: `#ff6b35`
- Secondary: `#d2691e`
- Accent: `#ff8c00`

## File Structure

```
src/
├── components/
│   ├── Navigation.js & .css
│   ├── Hero.js & .css
│   ├── Carousel.js & .css
│   ├── About.js & .css
│   ├── Contact.js & .css
│   └── Submit.js & .css
├── App.js & .css
├── index.js & .css
└── public/
    └── index.html
```

## Technologies Used

- React 18
- CSS3 with modern features
- Responsive design principles
- Smooth scrolling and animations
- Form validation

## Contributing

This website is designed specifically for the Genesis literary magazine at Boston College. Feel free to customize it for your needs!

## License

This project is created for the Genesis literary magazine community.