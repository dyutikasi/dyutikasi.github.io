# Portfolio Customization Guide

This guide will help you customize your portfolio website without needing coding knowledge.

## Your Live Website
**URL:** https://dyutikasi.github.io/

---

## How to Make Updates

### 1. Edit Content Locally
Open files in a text editor (Notepad, VS Code, etc.) and make changes.

### 2. Push Changes to GitHub
After making changes, run these commands in the terminal from your portfolio folder:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your website will automatically update in 1-2 minutes!

---

## Common Customizations

### Update Your Name or Title
**File:** `index.html`
**Line 37:** Change "Dyuti Kasi" to your preferred name
**Line 38:** Update your subtitle/role

### Update Statistics (GPA, AP Courses, Hours)
**File:** `index.html`
**Lines 72-82:** Edit the numbers in the `<h3>` tags

### Add/Edit Achievements
**File:** `index.html`
**Lines 107-143:** Each achievement is in an `achievement-card` div
- Change the emoji in `achievement-icon`
- Update the `<h3>` title
- Modify the `<p>` description
- Change the year in `achievement-year`

### Update Projects
**File:** `index.html`
**Lines 152-191:** Each project is in a `project-card` div
- Update the title in `<h3>`
- Change the description in `<p>`
- Modify tags in `project-tags`

### Add Your Email and Contact Info
**File:** `index.html`
**Line 205:** Replace `your.email@example.com` with your real email
**Line 213:** Add your city/state location

### Add Social Media Links
**File:** `index.html`
**Lines 217-219:** Replace `#` with your actual profile URLs
- LinkedIn: `https://linkedin.com/in/your-profile`
- GitHub: `https://github.com/yourusername`
- Instagram: `https://instagram.com/yourhandle`

### Add Your Photo
1. Add your photo to the `images/` folder (name it `profile.jpg`)
2. **File:** `index.html`
3. **Line 49-51:** Replace this code:
   ```html
   <div class="image-placeholder">
       <span>Your Photo</span>
   </div>
   ```
   With:
   ```html
   <img src="images/profile.jpg" alt="Dyuti Kasi" style="width: 400px; height: 400px; border-radius: 50%; object-fit: cover; box-shadow: var(--shadow-lg);">
   ```

### Change Colors
**File:** `css/styles.css`
**Lines 2-15:** Modify the color values in `:root`
- `--primary-color`: Main accent color
- `--secondary-color`: Secondary accent color
- `--accent-color`: Highlight color

---

## Adding New Sections

### Add a New Achievement
Copy this code block and paste it in the achievements section (around line 137):

```html
<div class="achievement-card">
    <div class="achievement-icon">🎯</div>
    <h3>Your Achievement Title</h3>
    <p>Description of your achievement</p>
    <span class="achievement-year">2024</span>
</div>
```

### Add a New Project
Copy this code block and paste it in the projects section (around line 191):

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">Project Image</div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description goes here.</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
    </div>
</div>
```

---

## Troubleshooting

### Changes not showing on the website?
1. Make sure you saved the files
2. Run the git commands to push changes
3. Wait 1-2 minutes for GitHub to rebuild
4. Clear your browser cache (Ctrl+F5)

### Broke something?
You can always view previous versions on GitHub and restore them.

---

## Need Help?
- Check the main [README.md](README.md) file
- Visit your repository: https://github.com/dyutikasi/dyutikasi.github.io
- GitHub Pages documentation: https://docs.github.com/en/pages

---

**Remember:** Every time you make changes, use the git commands to push them to GitHub!
