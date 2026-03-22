let writeups = [];

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const archive = document.querySelector(".archive");

const url= `${window.location.origin}/assets/metadata.json`;

// Load JSON
fetch(url)
    .then(res => res.json())
    .then(data => writeups = data);

input.addEventListener("input", () => {
    const query = input.value.toLowerCase();

    if (!query) {
        results.innerHTML = "";
        archive.style.display = "block";
        return;
    }

    archive.style.display = "none";
    results.innerHTML = "";

    const filtered = writeups.filter(w =>
        w.title.toLowerCase().includes(query) ||
        w.platform.toLowerCase().includes(query) ||
        w.difficulty.toLowerCase().includes(query) ||
        w.tags.some(tag => tag.toLowerCase().includes(query))
    );

    filtered.forEach(w => {
        const el = document.createElement("a");
        el.href = w.url;
        el.className = "writeup-link";

        el.innerHTML = `
            <span class="lab-name">${w.title}</span>
            <span class="lab-platform">${w.platform}</span>
            <span class="lab-difficulty ${w.difficulty.toLowerCase()}">${w.difficulty}</span>

        `;

        results.appendChild(el);
    });
});