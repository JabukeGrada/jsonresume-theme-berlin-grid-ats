# Berlin Grid (ATS optimized)

> Based on: https://www.npmjs.com/package/jsonresume-theme-berlin-grid

Nice and elegant theme for [JSON Resume](https://jsonresume.org/getting-started) 

Changes:
- Pure JavaScript
- No dependencies
- Safe URL removed (you can use HTML tags in texts)
- Optimized for printing (export as HTML, then Print to PDF)
- Optimized for ATS

## Installation and usage

1. Install JSON Resume CLI: 
```bash
npm install -g resume-cli
```
2. Install theme in target folder: 
```bash
npm install jsonresume-theme-berlin-grid-ats
```
3. Run html export: 
```bash
resume export --resume <your-resume-filename.json> --theme berlin-grid-ats resume.html
```

## Example

![Thomas Davis Example](thomas-davis-example.jpg)