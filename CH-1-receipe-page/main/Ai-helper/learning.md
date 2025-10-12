# HTML Semantics Learning Guide

## What is HTML Semantics?

**Semantics** means "meaning" - it's about using HTML elements that describe the **purpose** and **meaning** of your content, not just how it looks.

### Why Semantics Matter:
- **Accessibility**: Screen readers understand the structure
- **SEO**: Search engines better understand your content
- **Maintainability**: Code is easier to read and update
- **Future-proofing**: Content structure is separate from styling

## Key Semantic HTML5 Elements for Your Recipe Page

### 1. **Document Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

### 2. **Main Content Areas**

#### `<main>` - The primary content
- Only one per page
- Contains the main content (not navigation, headers, footers)
- For your recipe: wraps the entire recipe content

#### `<header>` - Page or section header
- Contains introductory content
- For your recipe: title, description, and image

#### `<section>` - Thematic grouping of content
- Groups related content together
- For your recipe: ingredients, instructions, nutrition, etc.

#### `<article>` - Self-contained content
- Could stand alone and make sense
- For your recipe: the entire recipe could be an article

### 3. **Content Structure**

#### `<h1>`, `<h2>`, `<h3>` - Heading hierarchy
- `<h1>`: Main page title (only one per page)
- `<h2>`: Major sections (Ingredients, Instructions, etc.)
- `<h3>`: Subsections if needed

#### `<p>` - Paragraphs
- For regular text content
- Each paragraph should be a complete thought

#### `<ul>` and `<ol>` - Lists
- `<ul>`: Unordered lists (bullets) - for ingredients
- `<ol>`: Ordered lists (numbers) - for step-by-step instructions

#### `<li>` - List items
- Individual items within lists

### 4. **Media and Tables**

#### `<img>` - Images
- Always include `alt` attribute for accessibility
- `src` points to the image file

#### `<table>` - Data tables
- For structured data like nutrition information
- Use `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`

### 5. **Text Emphasis**

#### `<strong>` - Important text
- For bold text that has semantic importance
- Screen readers will emphasize this

#### `<em>` - Emphasized text
- For italic text that has semantic emphasis
- Screen readers will stress this

## Your Recipe Page Structure Plan

```
<main class="recipe-container">
    <header class="recipe-header">
        <img src="..." alt="...">
        <h1>Recipe Title</h1>
        <p>Recipe description</p>
    </header>
    
    <section class="preparation-time">
        <h2>Preparation time</h2>
        <ul>
            <li>...</li>
        </ul>
    </section>
    
    <section class="ingredients">
        <h2>Ingredients</h2>
        <ul>
            <li>...</li>
        </ul>
    </section>
    
    <section class="instructions">
        <h2>Instructions</h2>
        <ol>
            <li>...</li>
        </ol>
    </section>
    
    <section class="nutrition">
        <h2>Nutrition</h2>
        <p>Description</p>
        <table>
            <tbody>
                <tr>
                    <th>...</th>
                    <td>...</td>
                </tr>
            </tbody>
        </table>
    </section>
</main>
```

## Learning Checklist

- [x] Understand what semantics means
- [ ] Know the difference between `<div>` and semantic elements
- [ ] Plan your HTML structure before coding
- [ ] Use proper heading hierarchy (h1 → h2 → h3)
- [ ] Choose the right list type (ul vs ol)
- [ ] Add alt text to images
- [ ] Use semantic elements for their intended purpose

## Next Steps

1. **Start with document structure** - DOCTYPE, html, head, body
2. **Add the main container** - `<main>` element
3. **Build each section** one at a time
4. **Test as you go** - open in browser frequently
5. **Validate your HTML** - use browser dev tools

## Common Mistakes to Avoid

- Don't use `<div>` for everything
- Don't skip heading hierarchy (h1, h2, h3)
- Don't forget alt attributes on images
- Don't use `<br>` for spacing (use CSS instead)
- Don't put block elements inside inline elements

## Questions to Ask Yourself

- What is the purpose of this content?
- How would a screen reader understand this?
- Does this element describe the content's meaning?
- Is this the most appropriate element for this content?
