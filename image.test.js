import * as React from 'react';
import { View, Image } from 'react-native';
import { render } from '@testing-library/react-native';

function TestComponent() {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Image
        // expecting msw to throw because there is no handler for this endpoint
        // and onUnhandledRequest is set to 'error'
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ height: '100%', width: '100%' }}
        accessibilityLabel="pic"
      />
    </View>
  );
}

// ...but this test passes just fine 🤷‍♂️
it('renders', async () => {
  const { findByA11yLabel } = render(<TestComponent />);
  await findByA11yLabel('pic');
});
