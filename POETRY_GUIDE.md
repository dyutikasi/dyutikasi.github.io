## Poetry Guide - How to Add Your Poems

Your poetry page is now live with **comprehensive protection features**!

### Protection Features Implemented:

1. **✅ Visible Watermark** - Your copyright appears as a large, semi-transparent watermark across each poem
2. **✅ Copyright Notices** - © notice at the top of the page and bottom of each poem
3. **✅ Disabled Text Selection** - Visitors cannot select or copy your poetry text
4. **✅ Right-Click Prevention** - Context menu is disabled on poems
5. **✅ Keyboard Shortcut Blocking** - Ctrl+C, Ctrl+A blocked on poem content
6. **✅ Metadata Embedding** - Copyright info embedded in page metadata
7. **✅ Print Protection** - Watermark becomes more visible when printing
8. **✅ Protection Messages** - Users see a message if they try to copy

---

## How to Add Your Actual Poems

### Step 1: Open the Poetry Page
Open `poetry.html` in a text editor (Notepad, VS Code, etc.)

### Step 2: Find a Poem Card
Look for this section (around line 50):

```html
<article class="poem-card" data-poem-id="1">
    <div class="poem-header">
        <h2 class="poem-title">Title of Your First Poem</h2>
        <span class="poem-date">December 2024</span>
    </div>
    <div class="poem-content" data-author="Dyuti Kasi">
        <div class="watermark">© Dyuti Kasi</div>
        <p class="poem-text">
            Line one of your poem here<br>
            Line two continues the thought<br>
            ...
        </p>
    </div>
    <div class="poem-footer">
        <p class="poem-copyright">© 2024 Dyuti Kasi. All rights reserved.</p>
    </div>
</article>
```

### Step 3: Replace Placeholder Content

**Replace these parts:**

1. **Poem Title**: Change `Title of Your First Poem` to your actual poem title
2. **Date**: Update `December 2024` to when you wrote the poem
3. **Poem Text**: Replace the placeholder lines with your actual poem

**Important:** Use `<br>` at the end of each line to create line breaks

### Example - Adding a Real Poem:

```html
<article class="poem-card" data-poem-id="1">
    <div class="poem-header">
        <h2 class="poem-title">Whispers of the Wind</h2>
        <span class="poem-date">September 2024</span>
    </div>
    <div class="poem-content" data-author="Dyuti Kasi">
        <div class="watermark">© Dyuti Kasi</div>
        <p class="poem-text">
            The wind whispers secrets to the trees<br>
            Carrying stories on invisible wings<br>
            Each gust a messenger of change<br>
            <br>
            I listen to its ancient song<br>
            Words that time cannot erase<br>
            Nature's voice in perfect harmony
        </p>
    </div>
    <div class="poem-footer">
        <p class="poem-copyright">© 2024 Dyuti Kasi. All rights reserved.</p>
    </div>
</article>
```

---

## Adding More Poems

To add a 4th, 5th, or more poems, copy this template and paste it before the closing `</div>` of the poetry-collection section:

```html
<article class="poem-card" data-poem-id="4">
    <div class="poem-header">
        <h2 class="poem-title">Your New Poem Title</h2>
        <span class="poem-date">Month Year</span>
    </div>
    <div class="poem-content" data-author="Dyuti Kasi">
        <div class="watermark">© Dyuti Kasi</div>
        <p class="poem-text">
            First line of your new poem<br>
            Second line continues<br>
            Third line adds depth<br>
            <br>
            New stanza begins<br>
            With fresh imagery<br>
            And powerful emotions
        </p>
    </div>
    <div class="poem-footer">
        <p class="poem-copyright">© 2024 Dyuti Kasi. All rights reserved.</p>
    </div>
</article>
```

**Remember to:**
- Change `data-poem-id="4"` to the next number
- Update the title, date, and content
- Keep the watermark and copyright notices

---

## Tips for Formatting Your Poetry

1. **Line Breaks**: Use `<br>` at the end of each line
2. **Stanza Breaks**: Use `<br>` twice to create space between stanzas
3. **Italics**: Wrap text in `<em>Your text</em>` for emphasis
4. **Bold**: Use `<strong>Your text</strong>` for strong emphasis

**Example:**
```html
This is a <em>beautiful</em> line<br>
This is a <strong>powerful</strong> statement<br>
```

---

## Deploying Your Poems

After adding your poems:

1. Save the `poetry.html` file
2. Open terminal/command prompt
3. Navigate to your portfolio folder
4. Run these commands:

```bash
git add .
git commit -m "Added my original poetry with copyright protection"
git push
```

5. Wait 1-2 minutes for GitHub Pages to update
6. Visit: https://dyutikasi.github.io/poetry.html

---

## Understanding the Protection

### What's Protected:
- ✅ Casual copying (right-click, Ctrl+C blocked)
- ✅ Screenshots show watermark
- ✅ Prints show watermark
- ✅ Legal copyright notices everywhere

### What's NOT 100% Protected:
- ⚠️ Determined users with technical knowledge can still extract text
- ⚠️ No online protection is foolproof

### Best Practices:
1. **Register Copyright**: For serious protection, register your poems with the U.S. Copyright Office
2. **Keep Originals**: Save original copies with timestamps
3. **Reverse Image Search**: Periodically check if your poems appear elsewhere online
4. **DMCA**: If you find unauthorized copies, you can file DMCA takedown requests

---

## Additional Features

### Change Watermark Text:
In `poetry.html`, find: `<div class="watermark">© Dyuti Kasi</div>`
You can change this to anything you want!

### Adjust Watermark Visibility:
In `css/poetry.css`, find `.watermark` and change `opacity: 0.08` to a higher number (0.15 max recommended)

### Remove a Protection Feature:
Edit `js/poetry.js` and comment out the feature you don't want

---

## Need Help?

Refer back to this guide or the main [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for general website updates.

**Your poetry is now protected and ready to share!** 🎭✨
