import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import DurationInput from "./DurationInput";

const meta: Meta<typeof DurationInput> = {
  title: "Core/Input/DurationInput",
  component: DurationInput,
  parameters: {},

  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    start: {
      table: {
        disable: true,
      },
    },
    end: {
      table: {
        disable: true,
      },
    },
    onConfirm: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultDurationInput = () => {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleConfirm = (start: string | null, end: string | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex w-[360px] items-center justify-center">
      <DurationInput
        label="페스티벌 명"
        start={startDate}
        end={endDate}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultDurationInput />,
};
