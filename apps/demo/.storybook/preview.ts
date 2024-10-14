import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    snapshot:{
      skip: true,
    }
  },
  initialGlobals: {
    foo: 'bar',
  }
};

export default preview;
