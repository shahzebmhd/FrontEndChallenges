# HTML Semantics Learning Guide - Part 2
## Fixing Common Issues in Your Recipe Page

## 🎉 What You Did Great!

✅ **Perfect document structure** - DOCTYPE, html, head, body  
✅ **Excellent semantic elements** - main, header, section  
✅ **Good heading hierarchy** - h1, h2  
✅ **Proper list usage** - ul for ingredients, ol for instructions  
✅ **Table structure** - th and td elements  

## 🔧 Issues to Fix

### 1. **Image Element (Line 11)**
**Current:**
```html
<img>
```

**Problem:** Missing required attributes
**Fix needed:**
```html
<img src="path/to/image.jpg" alt="description">
```

**Why:** 
- `src` tells browser where to find the image
- `alt` provides text description for accessibility

### 2. **Extra Closing Tag (Line 28)**
**Current:**
```html
</ul>
</p>  <!-- This shouldn't be here -->
```

**Problem:** You have a `</p>` tag but no opening `<p>` tag
**Fix:** Remove the `</p>` tag

### 3. **Class Name Consistency (Lines 42, 54)**
**Current:**
```html
<section class="Instructions">  <!-- Capital I -->
<section class="Nutrition">    <!-- Capital N -->
```

**Problem:** Inconsistent capitalization
**Fix:** Use lowercase for CSS classes
```html
<section class="instructions">
<section class="nutrition">
```

**Why:** CSS is case-sensitive, and lowercase is the standard

### 4. **Table Structure (Lines 56-69)**
**Current:**
```html
<table>
    <tr>
        <th>Calories</th>
        <td>277kcal</td>
    </tr>
    <!-- ... -->
</table>
```

**Problem:** Missing table body wrapper
**Fix needed:**
```html
<table>
    <tbody>
        <tr>
            <th>Calories</th>
            <td>277kcal</td>
        </tr>
        <!-- ... -->
    </tbody>
</table>
```

**Why:** Better semantic structure and accessibility

### 5. **Missing CSS Link**
**Current:** No CSS file linked
**Fix needed:** Add to `<head>` section
```html
<link rel="stylesheet" href="style.css">
```

## 🎯 Your Fix Checklist

- [x ] Add `src` and `alt` attributes to image
- [x] Remove extra `</p>` tag on line 28
- [x ] Change `Instructions` to `instructions` (lowercase)
- [ x] Change `Nutrition` to `nutrition` (lowercase)
- [ x] Wrap table rows in `<tbody>` element
- [ x] Add CSS link in head section
- [ x] Test in browser after each fix

## 🧠 Learning Questions

**After you fix these issues, ask yourself:**

1. **Image accessibility:** Why is the `alt` attribute important?
2. **HTML validation:** What happens when you have mismatched tags?
3. **CSS naming:** Why do we use lowercase for class names?
4. **Table semantics:** How does `<tbody>` help screen readers?

## 🚀 Next Steps After Fixes

1. **Test your HTML** - Open in browser
2. **Validate your code** - Use browser dev tools
3. **Start thinking about CSS** - What styles do you want to add?
4. **Plan your CSS structure** - How will you organize your styles?

## 💡 Pro Tips

- **Fix one issue at a time** - Don't try to fix everything at once
- **Test after each fix** - Make sure it still works
- **Use browser dev tools** - They'll show you HTML errors
- **Save frequently** - Don't lose your progress

## 🔍 How to Test Your Fixes

1. Save your HTML file
2. Open in browser (double-click the file)
3. Right-click → "Inspect Element" to see any errors
4. Check that the page displays correctly

Remember: The goal is to understand WHY each fix is needed, not just to copy the code!
