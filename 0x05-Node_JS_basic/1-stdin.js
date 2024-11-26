process.stdout.write('Hello! Please tell me your name:\n');

const handleInput = (input) => {
  process.stdout.write(`Nice to meet you, ${input.toString().trim()}!\n`);
  process.exit();
};

if (process.stdin.isTTY) {
  process.stdin.on('data', handleInput);
} else {
  process.stdin.on('data', handleInput);
  process.on('exit', () => {
    process.stdout.write('Thank you for using our application. Goodbye!\n');
  });
}
