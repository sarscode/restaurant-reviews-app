if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw-register.js')
      .then(registration => {
        // Registration was successful
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
      })
      .catch(err => {
        // registration failed
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
