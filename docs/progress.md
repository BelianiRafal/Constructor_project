# Constructor Optimization Progress

## What's Done

### Split up `app.js` 
- Moved config stuff to `utils/config.js` -- appjs_config[]
- Extracted `getImageUrl()` and its sub-functions to its own file
- Updated imports where needed
- Added test template `CategoriesTester.js` that can test all components, just to be sure we didn't break anything by that split
- Added some test products to the test campaign

## Current Status
- App structure is cleaner now
- We have a working test template

## Next
- Run performance audit
- Find the slow parts
- Fix them

## Files Changed
- `app.js` - split into smaller pieces
- `utils/config.js` - new config
- `utils/getImageUrl.js` - moved images utility functions to its own file
- `campaigns/test_campaign.js` - added test campaign
- `templates/tests/CategoriesTester.js` - new test template
- `templates/index.js` - exports the test template
