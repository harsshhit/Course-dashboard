# Skill Test Dashboard

A modern, responsive dashboard built with Next.js and TailwindCSS for tracking and analyzing skill test performance.

![Dashboard Overview](https://i.imgur.com/XYZ123.png)

## Features

### 🎯 Performance Tracking
- Real-time statistics including rank, percentile, and correct answers
- Interactive charts for performance visualization
- Syllabus-wise analysis with progress tracking
- Detailed question analysis with visual representation

### 📊 Data Visualization
- Comparison graph showing performance distribution
- Syllabus-wise analysis with color-coded progress bars
- Circular progress indicator for question analysis

### 🎨 Modern UI Components
- Clean and intuitive interface
- Responsive design that works on all devices
- Smooth animations and transitions
- Dark mode support

### 🛠 Technical Features
- Server-side rendering with Next.js
- Responsive design with Tailwind CSS
- Interactive charts using Recharts
- Type-safe development with TypeScript
- Component library with shadcn/ui

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Language**: TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── sidebar.tsx
│   ├── skill-test/
│   │   ├── comparison-graph.tsx
│   │   ├── header.tsx
│   │   ├── question-analysis.tsx
│   │   └── syllabus-analysis.tsx
│   └── ui/
│       └── [shadcn-ui components]
├── lib/
│   └── utils.ts
└── public/
```

## Screenshots

### Dashboard Overview
![Dashboard](https://i.imgur.com/ABC456.png)

### Performance Analysis
![Analysis](https://i.imgur.com/DEF789.png)

### Mobile View
![Mobile](https://i.imgur.com/GHI101.png)

## Features in Detail

### Navigation
- Persistent sidebar with quick access to different sections
- Responsive navbar with user profile
- Mobile-friendly navigation menu

### Analytics
- **Comparison Graph**: Bell curve showing performance distribution
- **Syllabus Analysis**: Topic-wise progress tracking
- **Question Analysis**: Visual representation of correct vs. incorrect answers

### Update Functionality
- Modal-based form for updating statistics
- Real-time updates to all charts and displays
- Input validation and error handling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)