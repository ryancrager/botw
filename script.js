/* ==========================================================
   BOTW Digital Program
   Version 0.6
========================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const animatedDetails = document.querySelectorAll("details.animated-details");

    animatedDetails.forEach((detail) => {
        const summary = detail.querySelector("summary");
        const content = detail.querySelector(".details-content");

        if (!summary || !content) return;

        summary.setAttribute("aria-expanded", detail.open ? "true" : "false");

        summary.addEventListener("click", (event) => {
            event.preventDefault();
            detail.open ? closeDetail(detail, summary, content) : openDetail(detail, summary, content);
        });
    });
});

function openDetail(detail, summary, content) {
    detail.open = true;
    summary.setAttribute("aria-expanded", "true");

    content.style.height = "0px";
    content.style.opacity = "0";

    requestAnimationFrame(() => {
        content.style.transition = "height 240ms ease, opacity 220ms ease";
        content.style.height = content.scrollHeight + "px";
        content.style.opacity = "1";
    });

    content.addEventListener("transitionend", function handler(event) {
        if (event.propertyName !== "height") return;
        content.style.height = "auto";
        content.removeEventListener("transitionend", handler);
    });
}

function closeDetail(detail, summary, content) {
    content.style.height = content.scrollHeight + "px";
    content.style.opacity = "1";

    requestAnimationFrame(() => {
        content.style.transition = "height 220ms ease, opacity 180ms ease";
        content.style.height = "0px";
        content.style.opacity = "0";
    });

    content.addEventListener("transitionend", function handler(event) {
        if (event.propertyName !== "height") return;
        detail.open = false;
        summary.setAttribute("aria-expanded", "false");
        content.style.height = "";
        content.style.opacity = "";
        content.style.transition = "";
        content.removeEventListener("transitionend", handler);
    });
}
