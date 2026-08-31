/* ============================================================================
   Sidebar — injected on every page so the site identity + nav is consistent
   and there is a single source of truth (no per-page nav markup to maintain).

   Absolute "/" links are used so this works at any depth, including
   /writeups/2026/<Name>/<file>.html on the xlondra.github.io root domain.
   ============================================================================ */
(function () {
    // ---- edit these two if needed --------------------------------------
    const GITHUB_URL = "https://github.com/xlondra";
    const TAGLINE    = "Learning offensive & defensive security by breaking things and writing it down.";
    // --------------------------------------------------------------------

    const LINKS = [
        { href: "/index.html",       label: "Home" },
        { href: "/writeuplist.html", label: "Writeups" },
        { href: "/tools.html",       label: "Tools" },
        { href: "/contact.html",     label: "Contact" },
    ];

    // xlondra flag mark (from favicon.svg), tinted via currentColor
    const AVATAR_SVG = `
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <g transform="scale(1.35) translate(-3 -3)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4.5 6L5.25 5.25H18.75L19.5 6V18L18.75 18.75H5.25L4.5 18V6ZM6 6.75V17.25H18V6.75H6ZM10.1894 12L7.71973 9.5303L8.78039 8.46964L12.3107 12L8.78039 15.5303L7.71973 14.4696L10.1894 12ZM12 15.75H15.75V14.25H12V15.75Z"/>
            </g>
        </svg>`;

    const GITHUB_SVG = `
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>`;

    const MAIL_SVG = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;

    const BURGER_SVG = `
        <svg viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`;

    function build() {
        if (document.querySelector(".site-sidebar")) return;

        // Which nav item is the current page?
        let path = location.pathname.replace(/\/index\.html$/, "/");
        if (path === "" ) path = "/";
        const inWriteups = location.pathname.includes("/writeups/");
        const isActive = (href) => {
            const h = href.replace(/\/index\.html$/, "/");
            if (h === "/") return path === "/";
            if (href === "/writeuplist.html") return location.pathname.endsWith(href) || inWriteups;
            return location.pathname.endsWith(href);
        };

        const navHTML = LINKS.map((l, i) => {
            const active = isActive(l.href) ? " is-active" : "";
            const sep = i < LINKS.length - 1 ? '<span class="sb-sep">·</span>' : "";
            return `<a href="${l.href}" class="sb-link${active}">${l.label}</a>${sep}`;
        }).join("");

        const aside = document.createElement("aside");
        aside.className = "site-sidebar";
        aside.innerHTML = `
            <div class="sb-inner">
                <div class="sb-brand">
                    <a class="sb-avatar" href="/index.html" aria-label="Home">${AVATAR_SVG}</a>
                    <a class="sb-name" href="/index.html">xlondra</a>
                </div>
                <nav class="sb-nav">${navHTML}</nav>
                <p class="sb-tagline">${TAGLINE}</p>
                <div class="sb-social">
                    <a href="${GITHUB_URL}" aria-label="GitHub" rel="me noopener" target="_blank">${GITHUB_SVG}</a>
                    <a href="/contact.html" aria-label="Contact">${MAIL_SVG}</a>
                </div>
                <button class="sb-toggle" aria-label="Toggle menu" aria-expanded="false">${BURGER_SVG}</button>
            </div>`;

        // Remove the old inline terminal header, then mount the sidebar.
        const oldHeader = document.querySelector("body > header");
        if (oldHeader) oldHeader.remove();
        document.body.insertBefore(aside, document.body.firstChild);

        // Mobile toggle
        const toggle = aside.querySelector(".sb-toggle");
        toggle.addEventListener("click", () => {
            const open = document.body.classList.toggle("nav-open");
            toggle.setAttribute("aria-expanded", String(open));
        });
        // Close the menu after tapping a link
        aside.querySelectorAll(".sb-nav a").forEach((a) =>
            a.addEventListener("click", () => document.body.classList.remove("nav-open"))
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", build);
    } else {
        build();
    }
})();
