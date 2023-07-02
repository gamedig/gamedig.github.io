import { h, watch } from "vue";
import Theme from "vitepress/theme";

import type { Router } from "vitepress";

import "./styles/rainbow.css";
import "./styles/vars.css";
import "./styles/overrides.css";
import "uno.css";

//! Imports are broken for .vue files
// @ts-ignore
import HomePage from "./components/HomePage.vue";

// Declare a variable to hold a reference to the homepage style
let homePageStyle: HTMLStyleElement | undefined;

// Default exported object to customize the VitePress theme
export default {
  // Spread the default theme properties
  ...Theme,
  // Override the Layout component of the VitePress theme
  Layout: () => {
    return h(Theme.Layout, null, {
      // Insert HomePage component after home features
      "home-features-after": () => h(HomePage),
    });
  },

  // enhanceApp is a function where you can apply some additional logic to the VitePress app
  enhanceApp({ router }: { router: Router }) {
    // Prevent this logic from running in a Node.js environment
    if (typeof window === "undefined") return;

    // Watch the current route's relative path for changes
    watch(
      () => router.route.data.relativePath,
      // Update the homepage style if we're on the homepage
      () => updateHomePageStyle(location.pathname === "/"),
      { immediate: true }
    );
  },
};



// If this code is running in a browser
if (typeof window !== "undefined") {
  // Detect the browser, add a class to the root HTML element for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome"))
    document.documentElement.classList.add("browser-chrome");
  else if (browser.includes("firefox"))
    document.documentElement.classList.add("browser-firefox");
  else if (browser.includes("safari"))
    document.documentElement.classList.add("browser-safari");
}

// Function to speed up the rainbow animation on the home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    // If the homePageStyle element already exists, don't create another one
    if (homePageStyle) return;

    // Create a new style element
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    // Append the new style element to the body
    document.body.appendChild(homePageStyle);
  } else {
    // If we're not on the home page and the style element exists, remove it
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
