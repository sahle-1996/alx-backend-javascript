export default function taskBlock(trueOrFalse) {
  const outerTask = false;
  const outerTask2 = true;

  if (trueOrFalse) {
    const innerTask = true; // eslint-disable-line no-unused-vars
    const innerTask2 = false; // eslint-disable-line no-unused-vars
  }

  return [outerTask, outerTask2];
}
