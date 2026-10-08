(() => {
  const container = document.querySelector(".giscus-container");
  const widgetScript = container.querySelector('script[src="https://giscus.app/client.js"]');
  const pageRoot = document.documentElement;
  const currentTheme = () => pageRoot.dataset.theme === "dark" ? "dark" : "light";
  widgetScript.dataset.theme = currentTheme();

  const updateTheme = () => {
    const frame = container.querySelector("iframe.giscus-frame");
    if (frame?.contentWindow) {
      frame.contentWindow.postMessage({ giscus: { setConfig: { theme: currentTheme() } } }, "https://giscus.app");
    }
  };

  new MutationObserver(updateTheme).observe(pageRoot, { attributes: true, attributeFilter: ["data-theme"] });
  const bindFrame = () => {
    const frame = container.querySelector("iframe.giscus-frame");
    if (frame && !frame.dataset.themeListener) {
      frame.dataset.themeListener = "true";
      frame.addEventListener("load", updateTheme);
    }
    updateTheme();
  };

  new MutationObserver(bindFrame).observe(container, { childList: true, subtree: true });
  bindFrame();
})();
