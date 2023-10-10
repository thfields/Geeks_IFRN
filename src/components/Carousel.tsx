import { useState } from 'react';

interface SliderHook {
  value: number;
  handleNext: () => void;
  handlePrev: () => void;
}

const Carousel = (max: number): SliderHook => {
  const [value, setValue] = useState<number>(1);

  const handleNext = (): void => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handlePrev = (): void => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  return {
    value,
    handleNext,
    handlePrev,
  };
};

export default Carousel;
