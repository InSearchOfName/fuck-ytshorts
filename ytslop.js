const STYLE_ID = "fuck-youtube-shorts";

function updateStyle() {
  const isHandlePage = location.pathname.startsWith("/@");
  const existingStyle = document.getElementById(STYLE_ID);

  if (isHandlePage) {
    // On channel (@) pages → REMOVE style
    if (existingStyle) existingStyle.remove();
  } else {
    // Everywhere else → ADD style
    if (!existingStyle) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        ytd-rich-section-renderer,
        yt-horizontal-list-renderer {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}
updateStyle();

// Listen for YouTube SPA navigation
document.addEventListener("yt-navigate-finish", updateStyle);