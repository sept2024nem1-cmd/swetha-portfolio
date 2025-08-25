"# Images Folder

This folder is for storing static image assets for the portfolio.

## Profile Picture

Add your profile picture here and name it `profile-picture.jpeg` (or update the import path in `src/components/HeroSection.jsx`).

Supported formats:
- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- SVG (.svg)

Recommended image specifications:
- Size: 256x256 pixels or larger (square aspect ratio preferred)
- Format: JPEG for photos, PNG for graphics with transparency
- File size: Under 2MB for optimal loading speed

## How to Add Your Profile Picture

1. Place your profile image file in this folder
2. Update the import statement in `src/components/HeroSection.jsx` if you use a different filename:

```javascript
// Change this line if your image has a different name
import profileImage from '../assets/images/your-image-name.jpg';
```

The component includes a fallback to a placeholder image if the local image fails to load." 
