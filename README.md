This README is designed to look professional while clearly ticking off every requirement for your submission. It highlights the collaborative nature of the project and the technical implementation of the Fetch API.

-----

# ⌨️ ShortcutQuest: The Universal Key-Finder

A collaborative web application designed to help users quickly search and filter through a comprehensive database of unique keyboard shortcuts. This project was built as part of a team-based challenge to demonstrate proficiency in asynchronous JavaScript and data management.

-----

## 👥 The Team

We are **Group [Your Group Number/Name]** on Canvas:

  * **Member 1:** [Name] — *Frontend Logic & Fetch Implementation*
  * **Member 2:** [Name] — *UI/UX & Filter Architecture*
  * **Member 3:** [Name] — *Data Management & Documentation*

-----

## 🚀 Project Overview

The goal was to create a centralized hub for keyboard shortcuts, ensuring each entry in the database is unique across the entire class collection.

### **Core Requirements Met:**

  * **Team Collaboration:** Developed by a self-selected team of 3.
  * **Search & Filter:** Real-time filtering system to narrow down shortcuts by name, key combination, or software.
  * **Asynchronous Data:** Built using the **JavaScript Fetch API** to retrieve and parse JSON data dynamically.
  * **Deployment:** Live application hosted and accessible via the link below.

-----

## 🔗 Submission Links

  * **Live Application:** [Insert Link to Deployed App, e.g., GitHub Pages/Vercel]
  * **Source Code:** [Link to this GitHub Repository]

-----

## 🛠 Technical Implementation

### **The Fetch API**

To handle the data requirement, we implemented a standard `fetch()` call to pull our unique shortcut library.

```javascript
// snippet of our data retrieval logic
const loadShortcuts = async () => {
    try {
        const response = await fetch('./data/shortcuts.json');
        const data = await response.json();
        renderShortcuts(data);
    } catch (error) {
        console.error("Error fetching keyboard data:", error);
    }
};
```

### **Data Structure**

Our `shortcuts.json` contains unique entries for every student, structured as follows:

```json
{
    { id: 23, app: "System", 
    action: "Comment code", 
    windows: "Ctrl + /", 
    mac: "Command + /", 
    author: "Shion Kishaba"}
}
```

-----

## 📸 Preview

-----

## 📝 Setup Instructions

1.  Clone the repository: `git clone https://github.com/[username]/[repo-name].git`
2.  Open `index.html` in your browser (or use Live Server in VS Code).
3.  Search for any shortcut to see the Fetch API and filtering in action\!