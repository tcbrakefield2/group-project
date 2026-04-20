const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");
const filterButtons = document.querySelectorAll(".filter-btn");

let activeFilter = "all";

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

function renderObjectResults(items) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.app} | ${item.action} | Win: ${item.windows} | Mac: ${item.mac} | Author: ${item.author}`;
    searchResults.appendChild(li);
  });
}

function handleSearch() {
  const results = getFilteredData();
  renderObjectResults(results);
  const query = searchInput.value.trim();
  searchMessage.textContent = query
    ? `Found ${results.length} result(s)`
    : `Showing ${results.length} shortcut(s)`;
}

// Filter button clicks
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    handleSearch();
  });
});

// Search as you type
searchInput.addEventListener("input", handleSearch);

// Search on button click
searchButton.addEventListener("click", handleSearch);

// Initial render
handleSearch();