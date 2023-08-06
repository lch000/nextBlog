type TrackEventType = { [key: string]: string | number };

type track = (eventName: string, eventData?: TrackEventType) => void;

export const trackEvent: track = (...args) => {
  if (window.umami && typeof window.umami?.track === 'function') {
    window.umami.track(...args);
  }
};
