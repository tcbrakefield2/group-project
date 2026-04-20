# ⌨️ ShortcutQuest: The Universal Key-Finder

A collaborative web application designed to help users quickly search and filter through a comprehensive database of unique keyboard shortcuts. This project was built as part of a team-based challenge to demonstrate proficiency in asynchronous JavaScript and data management.

-----

## 👥 The Team

We are **Group Golf** on Canvas:

  * **Member 1:** Thomas Brakefield — *Frontend Logic & Fetch Implementation*
  * **Member 2:** Reid Kuhlers — *UI/UX & Filter Architecture*
  * **Member 3:** Eric Staggs — *Data Management & Documentation*

-----

## 🚀 Project Overview

The goal was to create a centralized hub for keyboard shortcuts, ensuring each entry in the database is unique across the entire class collection.

### **Core Requirements Met:**

  * **Team Collaboration:** Thomas Brakefield, Reid Kuhlers, Eric Staggs
  * **Search & Filter:** Real-time filtering system to narrow down shortcuts by name, key combination, or software.
  * **Asynchronous Data:** Built using the **JavaScript Fetch API** to retrieve and parse JSON data.
  * **Deployment:** Live application hosted and accessible via the link below.

-----

## 🔗 Submission Links

  * **Live Application:** https://tcbrakefield2.github.io/group-project/
  * **Source Code:** https://github.com/tcbrakefield2/group-project.git

-----

## 🛠 Technical Implementation

### **The Fetch API**

To handle the data requirement, we implemented a custom function "getFilteredData()" call to pull our unique shortcut library.

```javascript
// snippet of our data retrieval logic
function getFilteredData() {
  const base = activeFilter === "all"
    ? jsObjectData
    : jsObjectData.filter(item => item.app === activeFilter);

  const query = searchInput.value.trim().toLowerCase();
  if (!query) return base;

  return base.filter(item =>
    Object.values(item).some(value => String(value).toLowerCase().includes(query))
  );
}
```

### **Data Structure**

Our `shortcuts.json` contains unique entries for every student, structured as follows:

```json
{ 
    id: 23, app: "System", 
    action: "Comment code", 
    windows: "Ctrl + /", 
    mac: "Command + /", 
    author: "Shion Kishaba"
}

```

-----

## 📸 Preview
<img width="883" height="587" alt="preview" src="https://github.com/user-attachments/assets/412e9291-523b-49ff-988b-357b87c332f1" />
-----

## 📝 Setup Instructions

1.  Clone the repository: `https://github.com/tcbrakefield2/group-project.git`
2.  Open `index.html` in your browser (or use Live Server in VS Code).
3.  Search for any shortcut to see the Fetch API and filtering in action\!
