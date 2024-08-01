import type { Preview } from "@storybook/react";
import React from "react";

import { Pretendard } from "../src/app/fonts/index";
import "../src/styles/globals.css";
import "../src/styles/theme.css";
import { cn } from "../src/utils/cn";

const preview: Preview = {
  parameters: {
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
