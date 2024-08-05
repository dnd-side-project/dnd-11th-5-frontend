import type { Preview } from "@storybook/react";
import React from "react";

import "../src/styles/reset.css";
import "../src/styles/globals.css";
import { cn } from "../src/utils/cn";
import { Pretendard } from "../src/app/fonts/index";

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
        <div className={cn(Pretendard.variable, "font-pretendard")}>
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
