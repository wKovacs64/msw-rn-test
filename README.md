# msw-rn-test

_React Native and MSW experiment_

Files of interest:

- `image.test.js`
- `jest.config.js`
- `setupTests.js`
- `mocks\server.js`
- `mocks\handlers.js`

Attempting to render `<Image source={{ uri: 'whatever' }} />` and intercept the
network request with msw. (Note: this is only for jest/node, not concerned about
running in RN itself.)
