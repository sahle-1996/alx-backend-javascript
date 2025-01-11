export function taskFirst() {
  const message = 'I prefer const when I can.';
  return message;
}

export function getLast() {
  const suffix = ' is okay';
  return suffix;
}

export function taskNext() {
  let sentence = 'But sometimes let';
  sentence = `${sentence}${getLast()}`;
  return sentence;
}
