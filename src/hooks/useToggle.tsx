import { useState } from 'react';

// Define the return type of the useToggle hook as a tuple: [boolean, toggle function]
type UseToggleReturn = [boolean, () => void];

/**
 * A custom hook to manage a boolean state with a toggle function.
 * @param initialValue - The initial value of the boolean state (default is false).
 * @returns A tuple containing:
 *   - The current boolean value.
 *   - A function to toggle the boolean value.
 */

export const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  // State to track the current boolean value, initialized with the provided initialValue
  const [value, setValue] = useState<boolean>(initialValue);

  // A function to toggle the boolean state between true and false
  const toggle = () => setValue((v) => !v);

  // Return the state and the toggle function as a tuple
  return [value, toggle];
};
