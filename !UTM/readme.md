# !UTM
_Removing [UTM parameters](https://en.wikipedia.org/wiki/UTM_parameters) from webpage URLs directly in your browser._ 

### Testing Instructions

Firefox:
  1. Download or clone the !UTM source to your computer.
  2. In Firefox, navigate to `about:debugging#/runtime/this-firefox` in the searchbar.
  3. Select `Load Temporary Add-on...`
  4. Select a file inside `!UTM`, such as `manifest.json`
  5. Test out some UTM infested URLs! You should see the UTM nonsense in URLs (almost) instantly vanish and the underlying page should successfully load.
