
/*
===========================================================
BOTW Digital Program
Biography details helper
===========================================================
*/

document.addEventListener("DOMContentLoaded", () => {
    const detailBlocks = document.querySelectorAll("details");

    detailBlocks.forEach((details) => {
        const summary = details.querySelector("summary");
        if (!summary) return;

        summary.setAttribute("role", "button");
        summary.setAttribute("aria-expanded", details.open ? "true" : "false");

        details.addEventListener("toggle", () => {
            summary.setAttribute("aria-expanded", details.open ? "true" : "false");
        });
    });
});
