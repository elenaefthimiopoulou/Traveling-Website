# ✈️ Travel Guide Website

A responsive and interactive travel agency website designed to help users discover destinations, book packages, and test their travel knowledge. This project demonstrates front-end web development skills using HTML5, CSS3, and JavaScript.

## 📖 Project Overview
This website serves as a digital portal for a boutique travel agency. It features a distinct "rustic" design aesthetic, comprehensive destination listings, a partner showcase, and interactive elements to engage visitors.

### 🔗 Pages Included
* **Home (`index.html`):** A landing page with a hero section, feature highlights, popular destinations, stats, and a promotional video.
* **Destinations (`products.html`):** A comprehensive table listing various travel packages (Italy, Germany, England, Greece, etc.) with prices, durations, and included amenities.
* **About Us (`shop.html`):** Information about the agency and a gallery of partner companies (Airlines, Hotels).
* **Contact (`contact.html`):** A fully styled contact form with JavaScript validation and agency contact details.
* **Quiz (`quiz.html`):** An interactive JavaScript-based trivia game to test travel knowledge.
* **Package Details:** Specific detailed pages for featured trips:
    * `product_details_italy.html`
    * `product_details_germany.html`
    * `product_details_england.html`

## ✨ Key Features
* **Responsive Design:** The layout adjusts to mobile, tablet, and desktop screens using CSS Media Queries and Grid/Flexbox layouts.
* **Interactive Quiz:** A dynamic 10-question travel trivia game (`quiz.html`) that tracks user scores in real-time.
* **Smart Greetings:** A JavaScript feature (`extra.js`) that welcomes users with "Good Morning," "Good Afternoon," or "Good Evening" based on their local time.
* **Rustic Aesthetic:** Custom CSS variables define a consistent color palette (Gold, Rustic Dark, Cream) across all pages.
* **Validation:** The contact form includes JavaScript-based submission handling and user feedback.

## 🛠️ Technologies Used
* **HTML5:** Semantic structure (nav, section, article, footer).
* **CSS3:**
    * CSS Grid & Flexbox for layout.
    * Custom Properties (Variables) for theming.
    * Animations and hover transitions.
* **JavaScript (ES6):**
    * DOM Manipulation.
    * Event Listeners (Forms, Buttons).
    * Date/Time Logic.
* **External Assets:**
    * FontAwesome for icons.
    * Unsplash for high-quality imagery.
    * Google Fonts ('Georgia', serif).

## 📂 File Structure
```text
/Travel-Guide-Website
├── index.html                  # Main Homepage
├── style.css                   # Global Stylesheet
├── extra.js                    # Logic for Quiz & Greetings
├── products.html               # Destinations Table
├── shop.html                   # About Us & Partners
├── contact.html                # Contact Form
├── quiz.html                   # Interactive Trivia
├── product_details_italy.html  # Italy Specific Page
├── product_details_germany.html# Germany Specific Page
├── product_details_england.html# England Specific Page
└── /images                     # Folder for local assets
