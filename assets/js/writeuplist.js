document.querySelectorAll(".year-block").forEach(block => {

    const header = block.querySelector(".year-header");
    const content = block.querySelector(".year-content");
    const countEl = block.querySelector(".count");
    const chevron = block.querySelector(".chevron");

    if (!header || !content) return;

    // Set the number of writeups
    const items = content.querySelectorAll(".writeup-link").length;
    if (countEl) countEl.textContent = ` (${items})`;

    // Click to expand/collapse
    header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight;

        content.style.maxHeight = isOpen ? null : content.scrollHeight + "px";

        if (chevron) chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
    });

});