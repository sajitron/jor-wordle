/**
 *
 * @param data list of words
 * @returns a random word from the data
 */
export const getRandomWord = (data: string[]): string => {
  return data[Math.floor(Math.random() * data.length)];
};

/**
 *
 * @param start index to start
 * @param end end index
 * @param step how many steps per iteration
 * @returns
 */
export const range = (start: number, end?: number, step = 1): number[] => {
  const output = [];
  if (!end) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
