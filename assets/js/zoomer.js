document.querySelectorAll(".zoomable").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.classList.add("zoom-overlay");

        const clone = img.cloneNode();
        overlay.appendChild(clone);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });

        document.body.appendChild(overlay);

    });

});