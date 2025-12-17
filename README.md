# My Green Lab Website

A modern, mobile-responsive website for My Green Lab built with Next.js 16, React 19, and Tailwind CSS. This site showcases laboratory sustainability programs, certification, and educational resources.

## 🚀 Features

- **Static Export Ready** - Configured for static site generation
- **Mobile Responsive** - Fully responsive design with Tailwind CSS
- **Modern Stack** - Next.js 16, React 19, TypeScript
- **Interactive Components** - Scroll animations, hover effects
- **SEO Optimized** - Meta tags, structured data
- **Fast Performance** - Static files, optimized assets

## 📱 Mobile Responsiveness

The website is fully mobile-responsive with:
- Responsive breakpoints (sm:, md:, lg:, xl:)
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Accessible interactive elements

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Static Export Ready

## 🚀 Getting Started

### Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

#### Option 1: Standard Build (Recommended)
```bash
npm run build
```
This generates static files in the `out/` directory.

#### Option 2: Build with Export Script
```bash
npm run build:static
```

### Testing Static Build Locally

To test your static build locally:

```bash
# Install serve if not already installed
npm install -g serve

# Serve the static files
npx serve out -p 3000
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── accredited-professionals/
│   ├── certification/
│   ├── contact/
│   └── ...
├── components/             # Reusable React components
│   ├── HeroSection.tsx
│   ├── Navigation.tsx
│   └── ...
├── globals.css            # Global styles
└── layout.tsx            # Root layout
```

## 🚀 Deployment Options

### Static Export (Recommended)
Your site is configured for static export and can be deployed to:

1. **Netlify** (Recommended)
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Vercel**
   - Import project to Vercel
   - Auto-detects static export

3. **GitHub Pages**
   - Build locally and push to `gh-pages` branch

4. **AWS S3 + CloudFront**
   - Upload `out/` directory to S3

5. **Traditional Web Hosting**
   - Upload static files to any web server

📖 **For detailed deployment instructions, see [STATIC_EXPORT_GUIDE.md](./STATIC_EXPORT_GUIDE.md)**

## 🎨 Key Pages

- **Home** (`/`) - Landing page with overview
- **Accredited Professionals** (`/accredited-professionals`) - Professional development program
- **Certification** (`/certification`) - Lab certification program
- **ACT Ecolabel** (`/act-ecolabel`) - Environmental labeling
- **Resources** (`/resources`) - Educational materials
- **Contact** (`/contact`) - Get in touch

## 🔧 Configuration

### Static Export Configuration
- `next.config.ts` - Configured for static export
- `trailingSlash: true` - Better static hosting compatibility
- `images.unoptimized: true` - Required for external images
- Remote patterns configured for external domains

### Build Scripts
- `npm run dev` - Development server
- `npm run build` - Production build with static export
- `npm run build:static` - Build and export in one command
- `npm start` - Start production server

## 📱 Mobile Responsiveness Details

The site uses Tailwind CSS responsive utilities:

- **Mobile**: Default styles (320px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

Key responsive features:
- Navigation menu collapses to hamburger on mobile
- Grid layouts adapt from 1-3 columns
- Text sizes scale appropriately
- Images maintain aspect ratios
- Touch targets meet accessibility standards

## 🎯 Performance Benefits

Static export provides:
- ⚡ **Faster Loading** - Pre-built HTML files
- 🎯 **Better SEO** - Search engine friendly
- 💰 **Cost Effective** - No server costs
- 🌍 **CDN Ready** - Global distribution
- 🔒 **Secure** - No server-side vulnerabilities

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**🚀 Your static export is ready for deployment!**

For detailed deployment instructions and troubleshooting, see [STATIC_EXPORT_GUIDE.md](./STATIC_EXPORT_GUIDE.md).
