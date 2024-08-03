import type { Preview } from "@storybook/react";
import React from "react";

import "../src/styles/globals.css";
import "../src/styles/theme.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story) => (
        <div>
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
