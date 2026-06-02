// =============================================
// Year block expand / collapse
// =============================================
document.querySelectorAll(".year-block").forEach(block => {
    const header  = block.querySelector(".year-header");
    const content = block.querySelector(".year-content");
    const countEl = block.querySelector(".count");
    const chevron = block.querySelector(".chevron");

    if (!header || !content) return;

    // Count visible writeups
    const items = content.querySelectorAll(".writeup-link").length;
    if (countEl) countEl.textContent = `(${items})`;

    // Expand — temporarily lifts max-height constraint to measure true height,
    // then either snaps open (initial load) or animates from 0 (user click).
    function expand(animate) {
        content.style.transition = 'none';
        content.style.maxHeight = 'none';
        const h = content.scrollHeight;
        if (animate) {
            content.style.maxHeight = '0px';
            void content.offsetHeight; // force reflow so transition starts from 0
            content.style.transition = '';
            content.style.maxHeight = h + 'px';
        } else {
            content.style.maxHeight = h + 'px';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                content.style.transition = '';
            }));
        }
        if (chevron) chevron.style.transform = "rotate(90deg)";
    }

    // Auto-expand on load without animation
    expand(false);

    header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        if (isOpen) {
            content.style.maxHeight = '0px';
            if (chevron) chevron.style.transform = "rotate(0deg)";
        } else {
            expand(true);
        }
    });
});


// =============================================
// Category filter tabs
// =============================================
const tabs = document.querySelectorAll(".cat-tab");
const rows = document.querySelectorAll(".writeup-link");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const selected = tab.dataset.cat;

        rows.forEach(row => {
            if (selected === "all" || row.dataset.cat === selected) {
                row.classList.remove("row-hidden");
            } else {
                row.classList.add("row-hidden");
            }
        });

        // Recalculate open year block heights after filtering
        document.querySelectorAll(".year-block").forEach(block => {
            const content = block.querySelector(".year-content");
            if (content && content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.transition = 'none';
                content.style.maxHeight = 'none';
                const h = content.scrollHeight;
                content.style.maxHeight = h + 'px';
            }
        });
    });
});
