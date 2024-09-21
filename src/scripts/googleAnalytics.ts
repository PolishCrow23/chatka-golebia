declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function initializeGA(trackingId: string) {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', trackingId);
}

