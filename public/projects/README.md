# Project Images Folder Structure

This folder contains showcase images for each project in the portfolio.

## Structure

```
public/projects/
├── smashplus/
│   ├── screenshot-1.png
│   ├── screenshot-2.png
│   └── screenshot-3.png
├── private-project/
│   ├── screenshot-1.png
│   └── screenshot-2.png
└── README.md
```

## Guidelines

1. **Create a folder for each project** using the project's `id` from App.tsx
2. **Name images consistently**: Use `screenshot-1.png`, `screenshot-2.png`, etc.
3. **Recommended image specs**:
   - Format: PNG or JPG
   - Max width: 1200px
   - Aspect ratio: 16:9 or 4:3 preferred
   - Optimize for web (compress images)

4. **Update App.tsx** when adding new images:
   ```typescript
   images: [
     "/Portfolio/projects/project-id/screenshot-1.png",
     "/Portfolio/projects/project-id/screenshot-2.png",
   ]
   ```

## Example

To add images for a new project:
1. Create folder: `public/projects/your-project-id/`
2. Add your images to that folder
3. Update the project in App.tsx with the images array
