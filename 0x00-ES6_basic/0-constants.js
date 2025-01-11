export function taskFirst() {
  const statement = 'I prefer const when I can.';
  return statement;
}

export function getLast() {
  const addition = ' is okay';
  return addition;
}

export function taskNext() {
  let phrase = 'But sometimes let';
  phrase += getLast();
  return phrase;
}
