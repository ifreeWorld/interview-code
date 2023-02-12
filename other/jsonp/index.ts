function jsonp(url: string, name: string, callback: (data: any) => void) {
  const script = document.createElement('script');
  script.src = url;
  // @ts-ignore
  window[name] = (data: any) => {
    callback(data);
  };
  document.body.appendChild(script);
}
