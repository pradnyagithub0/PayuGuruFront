import { useState } from 'react';
import { rem } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { MonthPickerInput } from '@mantine/dates';

export function YearPickerInput() {
  // Remove type annotations for JavaScript
  const [value, setValue] = useState(null); 
  const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <MonthPickerInput
      leftSection={icon}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}

export default YearPickerInput;
