type TrackEventType = { [ key: string ]: string | number }

type track = (eventName:string,
  eventData?:TrackEventType )=>void

export const trackEvent: track = (...args) => {
  console.log(window.umami)
  console.log('------', typeof window.umami?.track)
  if (window.umami && typeof window.umami?.track === 'function') {
    console.log('我上报了')
    window.umami.track('123');
  }
};
