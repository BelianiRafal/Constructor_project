# Constructor Optimization Plan

## Performance Issues Found

### 1. Template Rendering
- **Problem**: Templates like `Create2Columns.js` do lots of loops and string building
- **Problem**: Components rebuild HTML every time even with same data
- **Fix**: Cache results, avoid rebuilding same content<br>
  proposed structure: `/built/[campaign_id]/[template_name]/[shop]/[language]/[file]/`<br>
	eg. `/built/34213/Landing/Beliani.be/fr/footer.[?tbd]`<br>
	cached file could look like this:

	```
	MD5: << md5 hash here - generated from entry data? >>

	... generated content ...
	```

### 2. Function Calls
- **Problem**: Functions like `getHeader()`, `getFooter()` called repeatedly
- **Fix**: Make header & footer DRY, replace only translation-needed elements (links, images) (placeholders?)

### 3. String Building
- **Problem**: Lots of template literals and string concatenation
- **Fix**: Use arrays and join() for big strings


## Easy Fixes (Do First)

1. **Add simple caching to components**
   - Cache HTML output if props haven't changed
   - Start with `Header`, `Footer`, `Category`

2. **Optimize Create2Columns**
   - Pre-calculate column layouts
   - Cache left/right column results

3. **Cache template results**
   - Store rendered templates for same input
   - Clear cache when data changes

4. **Fix string building**
   - Use `arr.join('')` instead of `str += str`
   - Pre-allocate arrays for known sizes
