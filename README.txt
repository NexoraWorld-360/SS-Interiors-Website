# SS Interiors & Developers — Website

This is a responsive, static website starter for SS Interiors & Developers.

## Files
- `index.html` — website content and page structure
- `style.css` — responsive layout and visual design
- `script.js` — mobile navigation, project filters and WhatsApp enquiry form

## Before publishing (important)
1. Open `script.js` and replace `91XXXXXXXXXX` with the company's WhatsApp number in international format. For an Indian number, use `91` followed by the 10-digit mobile number, with no `+`, spaces or dashes.
2. In `index.html`, replace the sample phone number, email, office addresses and Instagram link with verified company details.
3. Replace all demo portfolio images and project names with real SS Interiors & Developers work. Do not present demo images as completed company projects.
4. Confirm the services listed in the Services section match the services the company actually offers.
5. Add genuine customer reviews only after receiving permission and verifying the wording.

## Enquiry form behavior
The form opens WhatsApp with a pre-filled message. The visitor must review and press Send in WhatsApp. It does not silently submit data, send email, or store customer information. To send enquiries directly to the office email without opening WhatsApp, connect a secure backend/form service before launch. Never put private API keys in browser JavaScript.

## Publish on Vercel using GitHub
1. Create a GitHub repository and upload these three files to the repository root.
2. In Vercel, choose **Add New → Project**, import the GitHub repository.
3. For a plain HTML/CSS/JS site, use the default/Other framework setting, leave the build command empty, and set the output directory to `.` if asked.
4. Deploy. Future commits pushed to the connected GitHub branch will trigger a new Vercel deployment automatically.
