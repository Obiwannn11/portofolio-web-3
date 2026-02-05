# 📰 Wawan's Portfolio Website - Newsprint Edition

Portfolio website dengan design system **Newsprint** - terinspirasi dari golden age of print journalism, reimagined untuk web.

## 🎨 Design Philosophy

Website ini mengadopsi aesthetic newsprint yang modern dengan karakteristik:
- **Stark Geometry**: Zero border radius, perfect rectangles
- **High Information Density**: Efficient use of space
- **Typographic Drama**: Massive serif headlines paired dengan legible body text
- **Visible Structure**: Grid lines yang prominent
- **Editorial Authority**: Serious, timeless, trustworthy

## 📁 Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete styling dengan Newsprint design system
├── script.js           # Interactive functionality
├── resume.pdf          # Your CV/Resume (belum ada, silakan tambahkan)
└── README.md           # Documentation (this file)
```

## 🚀 Quick Start

### 1. Customize Content

Buka `index.html` dan update informasi berikut:

**Contact Information (Line 335-365):**
```html
<!-- Update dengan informasi Anda -->
<a href="mailto:your-email@example.com" class="contact-link">
<a href="https://linkedin.com/in/your-profile" ...>
<a href="https://github.com/your-username" ...>
```

**Projects (Line 182-291):**
- Tambahkan link GitHub jika sudah available
- Update deskripsi sesuai project Anda
- Tambah/hapus project cards sesuai kebutuhan

**Bio & About (Line 148-171):**
- Customize description dengan style Anda
- Update stats di hero section

### 2. Add Your Resume

Upload file PDF dengan nama `resume.pdf` ke root directory:
```
portfolio/
├── index.html
├── styles.css
├── script.js
└── resume.pdf          # ← Add your CV here
```

### 3. Add Profile Photo (Optional)

Jika ingin mengganti placeholder "W" dengan foto:

**Option A: Quick Replace**
Di `index.html` line 122-128, replace dengan:
```html
<div class="profile-box">
    <img src="your-photo.jpg" alt="Wawan Profile" style="width: 100%; height: 100%; object-fit: cover;">
    <div class="profile-label">BACKEND DEVELOPER</div>
</div>
```

**Option B: Keep the Design**
Biarkan placeholder "W" - it's part of the newsprint aesthetic!

## 🌐 Deployment ke GitHub Pages

### Step 1: Create Repository

```bash
# Initialize git (jika belum)
git init

# Add files
git add .
git commit -m "Initial commit: Newsprint portfolio"

# Create repo di GitHub dengan nama: your-username.github.io
# atau nama lain seperti: portfolio

# Add remote
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to repository Settings
2. Scroll ke **Pages** section
3. Source: Deploy from branch
4. Branch: `main` / root
5. Save

Website akan tersedia di: `https://your-username.github.io`

### Step 3: Custom Domain (Optional)

Jika punya domain:
1. Tambah CNAME record di DNS provider pointing ke `your-username.github.io`
2. Di GitHub Pages settings, add custom domain
3. Enable "Enforce HTTPS"

## 🎨 Customization Guide

### Colors

Buka `styles.css` line 18-27 untuk mengubah color palette:

```css
:root {
    --bg-primary: #F9F9F7;    /* Background off-white */
    --fg-primary: #111111;    /* Text & border black */
    --accent-red: #CC0000;    /* Accent red (sparingly!) */
    /* ... */
}
```

### Typography

Font stack sudah optimal, tapi jika ingin ganti:

```css
/* Line 10-13 */
.font-serif { font-family: 'Playfair Display', serif; }
.font-body { font-family: 'Lora', serif; }
.font-sans { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }
```

### Add New Section

Template untuk section baru:

```html
<section class="section" id="new-section">
    <div class="container">
        <div class="section-header">
            <span class="section-number">06</span>
            <h2 class="section-title">Section Title</h2>
            <div class="section-line"></div>
        </div>
        
        <!-- Your content here -->
        
    </div>
</section>
```

## 📱 Responsive Design

Website fully responsive dengan breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Test di berbagai device menggunakan:
- Chrome DevTools (F12 → Toggle device toolbar)
- Real devices
- https://responsively.app/

## ✨ Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Mobile menu
- ✅ Animated ticker
- ✅ Scroll animations
- ✅ SEO-friendly structure
- ✅ Accessible (WCAG AA compliant)
- ✅ Fast loading (no dependencies)
- ✅ GitHub Pages ready

## 🔧 Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ iOS Safari, Chrome Mobile

## 📝 Content Checklist

Before deployment, make sure:

- [ ] Update email address (3 places: contact section, footer)
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Add resume.pdf file
- [ ] Customize bio/about text
- [ ] Review all project descriptions
- [ ] Update stats in hero section (projects count, etc.)
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Test download CV button

## 🎯 SEO Tips

1. **Add meta tags** di `<head>`:
```html
<meta name="keywords" content="Backend Developer, PHP, Golang, Web Development, Makassar">
<meta name="author" content="Wawan">
<meta property="og:title" content="Wawan - Backend Developer">
<meta property="og:description" content="Portfolio of Wawan...">
<meta property="og:image" content="path-to-preview-image.jpg">
```

2. **Create sitemap.xml**
3. **Add Google Analytics** (optional)
4. **Submit to Google Search Console**

## 🐛 Troubleshooting

**CV download tidak berfungsi?**
- Pastikan file `resume.pdf` ada di root directory
- Check file permissions
- Try hard refresh (Ctrl+F5)

**Mobile menu tidak muncul?**
- Check JavaScript console untuk errors
- Pastikan `script.js` loaded correctly

**Font tidak load?**
- Check internet connection (fonts dari Google Fonts)
- Try clearing cache

## 📞 Support

Jika ada pertanyaan atau issues:
1. Check dokumentasi ini dulu
2. Google/Stack Overflow untuk general web dev questions
3. GitHub Issues untuk bug reports

## 📄 License

Free to use and modify untuk personal portfolio. 

**Credits:**
- Design System: Newsprint (inspired by classic print journalism)
- Icons: Lucide React (converted to inline SVG)
- Fonts: Google Fonts (Playfair Display, Lora, Inter, JetBrains Mono)

---

**Built with ❤️ and ☕ by Wawan**

Happy Vibecoding! 🚀
