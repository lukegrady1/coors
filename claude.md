Design a premium, single-page parallax website for a canned drink brand.
The user must be able to change:

Drink name (e.g. “Coca Cola”)
Drink description (1–3 sentences)
Theme color (brand accent)
Dark or light mode
WebP background parallax image sequences 

Hero Layout & Visual Style
Create a full-screen hero section with this layout:

Background:
The entire hero background is a WebP image sequence that fills the screen.
As the user scrolls down, the sequence plays forward; scrolling up reverses it.
This animation should feel cinematic and smooth.

Overlay Text Block (Left Side):
Below the logo: Large, bold, uppercase drink name (e.g. “CHERRY”).
Under the name: smaller subtitle line, light font weight (e.g. “COLA”).
Under the subtitle: a short descriptive paragraph.
Below the paragraph: two full rounded CTA buttons side by side (e.g. “ADD TO” and “CART”), left one is transparent background and white text color, right one is right background with black text
All of this text overlays directly on top of the moving background.

Center Area:
Keep the center visually clean and mostly empty of additional UI, so the animated background is clearly visible behind the text.

Right Side Variant Navigation:
On the right, vertically centered, display a huge number representing the current flavor index (01, 02, 03…).
Beside or near that number, include a slim vertical navigation strip with:
A small “PREV” label and arrow for the previous flavor.
A thin vertical divider line.
A small “NEXT” label and arrow for the next flavor.
Clicking PREV/NEXT switches drink variant (text, theme color, and WebP sequence).

Bottom Center:
A small row of social icons (Twitter/X, Instagram, Facebook, etc.), minimal and monochrome.

Theme & Mode:
Default to a dark, cinematic look: near-black background, bright text.
Provide a toggle for dark/light mode:
Dark: black/charcoal background, white/gray text.
Light: off-white background, dark text.
Apply the theme color to CTAs, accents, active indicators, and subtle highlights.

Parallax Scroll Behavior
Map scroll position to the frame index of the WebP sequence:
Scrolling down advances frames.
Scrolling up reverses frames.
The animation should feel tied to the page scroll, not just time-based autoplay.
Keep performance smooth and responsive.

Multiple Drink Variants
Support an array of drink variants, where each variant has:
Name
Subtitle
Description
Theme color
Mode (optional override for dark/light)
Path or list of URLs for its WebP frame sequence

When the user clicks PREV/NEXT:
Update the hero overlay text to the new drink’s name/subtitle/description.
Update the text with a fade out fade in animation
Change the theme color and mode if specified.
Swap to the corresponding WebP background sequence.
Update the large index number (01, 02, 03…).

Loading Experience
Because the site uses WebP sequences:
Before showing the hero, display a full-screen loading overlay with:

Brand logo or name.
A horizontal loading bar that fills as frames are loaded.
Optional percentage indicator (e.g. “Loading 72%”).
Only reveal the hero after the initial sequence is fully preloaded to avoid flicker.
When switching variants, show a small loading indicator near the PREV/NEXT controls while the new sequence loads.

Navigation & Sections
Create a sticky top navigation bar:
Left: brand logo/name.
Right: links that smooth-scroll to the main sections: Product, Ingredients, Nutrition, Reviews, FAQ, Contact
Indicate the active section while scrolling.
Include the dark/light mode toggle in the navbar.

Below the hero, design standard sections for a drink website:
Product / About the Drink – brand story and flavor overview.
Ingredients & Benefits – ingredients list and short benefits.
Nutrition Facts – card styled similar to a nutrition label.
Reviews / Social Proof – testimonials and ratings.
FAQ – accordion Q&A.
Final Call-to-Action – strong headline, CTA buttons, and supporting text.
Footer

Add a clean footer containing:
Brand logo or name.
Links (About, Contact, Privacy Policy, Terms).
Social icons.
Copyright text.
Make it visually consistent with the overall theme.
Black background

In short:
Generate a cinematic, scroll-controlled parallax drink website where the hero background is a WebP animation tied to scroll, the text overlays directly on top of that animation, the center remains visually open to showcase motion, users can switch between multiple drink flavors via a right-side PREV/NEXT control, and all key content (text, theme, mode, sequences) is easily customizable.

Company Name: Coors Light
Company Description: Coors Light is a leading American light lager known for its "Cold Filtered" brewing process and iconic mountain branding that emphasizes refreshing, crisp drinkability.
Website Theme: Dark Mode Only
Theme Color: Black and White

Drink
Drink Name: Coors
Drink Subtitle: Light
Drink Description: Cold as the Rockies
WebP Sequence Path: The png's are in the webp folder in the root of the directory
Frame Count: 240

Placeholder:
https://placehold.co/1920x1080/frame_0001/FFFFFF/webp

CTA Images
Create a square CTA product image of the Coors Light can in the same style as the reference:
 A bold monochrome light blue background, smooth studio gradient, clean and minimal.
 Place the Coors Light can centered and upright, with crisp studio lighting and soft shadow.
 Surround the bottom of the can with realistic, glossy Mountains piled across the width.
 Use a vibrant, pop-art aesthetic: bright colors, high contrast, slightly reflective can surface, clean edges.
 No Memphis patterns — keep it simple, bold, color-blocked, just like the reference.
 Overall mood: playful, modern, vibrant, clean.