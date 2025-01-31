export function taskInitial() {
  const taskMessage = 'I prefer const when I can.';
  return taskMessage;
}

export function getSuffix() {
  return ' is okay';
}

export function taskFollowing() {
  let combinedMessage = 'But sometimes let';
  combinedMessage += getSuffix();

  return combinedMessage;
}
