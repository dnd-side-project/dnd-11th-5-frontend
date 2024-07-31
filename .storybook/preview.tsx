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
        // TODO: 스토리북 전체에 폰트적용이 안됨. 방법을 찾아야함
        <div className={cn(Pretendard.variable, "font-pretendard")}>
          <Story />
        </div>
      ),
    ],
  },
};

export default preview;
