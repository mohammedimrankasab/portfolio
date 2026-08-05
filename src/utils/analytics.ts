import ReactGA from "react-ga4";

export function initAnalytics() {
  ReactGA.initialize("G-15DZF4CEEQ");
}

export function pageView() {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
}

export function trackEvent(category: string, action: string, label?: string) {
  if (import.meta.env.PROD) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
}
