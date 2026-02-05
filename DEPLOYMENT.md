# 🚀 Deployment Guide - GitHub Pages

## Cara Deploy Website Portfolio ke GitHub Pages

### Prerequisites
- Git installed di komputer
- GitHub account
- Text editor (VS Code, Sublime, dll)

### Step-by-Step Deployment

#### 1. Prepare Files

Pastikan structure folder Anda seperti ini:
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── resume.pdf (add your CV)
├── README.md
└── .gitignore
```

#### 2. Initialize Git Repository

Buka terminal/command prompt di folder portfolio, lalu:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"
```

#### 3. Create GitHub Repository

**Option A: Via GitHub Website**
1. Go to https://github.com
2. Click tombol "+" di kanan atas → "New repository"
3. Repository name: 
   - `username.github.io` (untuk personal site)
   - atau nama lain seperti `portfolio`
4. Public repository
5. JANGAN centang "Add README" (karena kita sudah punya)
6. Create repository

**Option B: Via GitHub CLI (jika installed)**
```bash
gh repo create portfolio --public --source=. --remote=origin
```

#### 4. Connect & Push to GitHub

```bash
# Add remote (ganti username dengan GitHub username Anda)
git remote add origin https://github.com/username/portfolio.git

# atau jika nama repo adalah username.github.io:
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 5. Enable GitHub Pages

1. Go to repository di GitHub
2. Click **Settings**
3. Scroll down ke **Pages** (di sidebar kiri)
4. Source: 
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

#### 6. Wait & Access

- GitHub akan build website Anda (tunggu 1-2 menit)
- Website akan tersedia di:
  - Jika nama repo `username.github.io`: https://username.github.io
  - Jika nama lain: https://username.github.io/portfolio

#### 7. Verify Deployment

Check indicator di Pages settings:
- ✅ **Your site is live at https://...**

### Update Website (Setelah Deploy)

Setiap kali Anda ubah code:

```bash
# Stage changes
git add .

# Commit dengan message yang descriptive
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push

# Website akan auto-update dalam 1-2 menit
```

### Common Commands

```bash
# Check status
git status

# View history
git log --oneline

# Create new branch untuk experiment
git checkout -b feature-name

# Switch back to main
git checkout main

# Merge feature branch
git merge feature-name
```

## Troubleshooting

### Website tidak muncul setelah deploy?

**Check 1: Repository Settings**
- Pastikan Pages enabled di Settings
- Branch: main
- Folder: / (root)

**Check 2: File Names**
- HARUS `index.html` (lowercase)
- Bukan `Index.html` atau `HOME.html`

**Check 3: Wait Time**
- Initial deployment bisa 5-10 menit
- Check status di Settings → Pages

**Check 4: Browser Cache**
- Hard refresh: Ctrl+F5 (Windows) atau Cmd+Shift+R (Mac)
- Try incognito/private mode

### Push rejected / Authentication failed?

**Solution 1: Use Personal Access Token**
1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. Scope: pilih `repo`
5. Copy token
6. Saat git push, use token as password

**Solution 2: Use SSH**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to GitHub: Settings → SSH and GPG keys
# Change remote to SSH
git remote set-url origin git@github.com:username/portfolio.git
```

### CSS/JS tidak load?

**Check file paths:**
```html
<!-- CORRECT (relative paths) -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

<!-- WRONG (absolute paths) -->
<link rel="stylesheet" href="/styles.css">
<script src="/script.js"></script>
```

## Custom Domain (Optional)

Jika Anda punya domain sendiri (misal: wawan.dev):

### 1. Configure DNS

Di DNS provider Anda (Namecheap, GoDaddy, Cloudflare, dll):

**Option A: Subdomain (www.wawan.dev)**
```
Type: CNAME
Name: www
Value: username.github.io
```

**Option B: Apex domain (wawan.dev)**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### 2. Configure GitHub

1. Repository Settings → Pages
2. Custom domain: `wawan.dev` atau `www.wawan.dev`
3. Save
4. Wait for DNS check (bisa 24-48 jam)
5. Enable "Enforce HTTPS"

## Advanced: Using Custom 404 Page

Create `404.html` untuk custom error page:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container" style="min-height: 100vh; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center;">
            <h1 class="hero-title" style="margin-bottom: 1rem;">404</h1>
            <p style="font-size: 1.5rem; margin-bottom: 2rem;">Page Not Found</p>
            <a href="/" class="btn btn-primary">Back to Home</a>
        </div>
    </div>
</body>
</html>
```

Commit dan push:
```bash
git add 404.html
git commit -m "Add custom 404 page"
git push
```

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)

---

Good luck dengan deployment! 🚀

Jika ada pertanyaan, feel free to Google atau ask di GitHub Community.
