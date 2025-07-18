# 🔗 LinkHub

LinkHub is a Linktree clone built with **Next.js**, **Tailwind CSS**, and **MongoDB**. It lets users create personalized link pages by submitting a username and up to 8 URLs through a simple, clean interface. Users can then generate, view, and share their unique LinkHub page with customizable themes and pointer styles.

---
## ScreenShots

<img width="1892" height="927" alt="image" src="https://github.com/user-attachments/assets/02054720-8e5b-4281-b215-cbd739f2f2a5" />

#Mobile
<img width="1415" height="896" alt="image" src="https://github.com/user-attachments/assets/0a79fd62-7bf0-4b98-9a52-482b1b8e4e43" />

---

## 🚀 Features

- User-friendly form to input a username and up to 8 links  
- Generates a unique LinkHub page per username  
- Customizable themes and pointer styles for personalization  
- Responsive design powered by Tailwind CSS  
- Data securely stored in MongoDB  
- Deployed on Vercel for fast, reliable hosting  

---

## Tech Stack

- **Next.js** — React framework for server-side rendering and routing  
- **Tailwind CSS** — Utility-first CSS framework for styling  
- **MongoDB** — NoSQL database for user data storage  
- **Vercel** — Hosting and deployment platform  

---

## How to Use

1. Go to the LinkHub homepage  
2. Fill out the form with your desired username and up to 8 URLs  
3. Click **Generate** to create your personalized link page  
4. Share your unique LinkHub URL with others  

---


## 📁 Project Structure

```plaintext
/app
  ├─ /about/page.js           # Static About page
  ├─ /generate/
  │    ├─ page.js             # Link generation form page
  │    └─ generateclient.js   # Client-side form component inside generate
  ├─ /privacy/page.js         # Privacy policy page
  ├─ /[username]/page.js      # Dynamic user link page by username

/components
  ├─ Navbar.js                # Navigation bar component
  ├─ Footer.js                # Footer component
  ├─ FooterController.js      # Logic/controller for Footer
  ├─ Animation.js             # Animation components or utilities

/public
  ├─ /assets                  # Static assets like images, icons, etc.
  ├─ /other-folders           # Additional public files and folders
```

## Getting Started (for Developers)

1. Clone the repository  
   ```bash
   git clone https://github.com/CodzHorizon/linkhub.git
    ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Create a .env.local file and add your MongoDB connection string:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
    ```
   
4. Run the development server
   ```bash
   npm run dev
   ```
   
5.Open http://localhost:3000 to view the app  




---
## Author

**Your Name**  
- GitHub: [CodzHorizon](https://github.com/CodzHorizon)  
- Email: kshitizsh.8@example.com  

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Copyright

© 2025 CodzHorizon. All rights reserved.

            
