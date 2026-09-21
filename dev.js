import { spawn } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const nextArgs = ['dev'];

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--host') {
    nextArgs.push('--hostname');
    if (rawArgs[i + 1]) {
      nextArgs.push(rawArgs[i + 1]);
      i++;
    }
  } else if (arg.startsWith('--host=')) {
    nextArgs.push(`--hostname=${arg.split('=')[1]}`);
  } else {
    nextArgs.push(arg);
  }
}

if (!nextArgs.includes('-p') && !nextArgs.includes('--port')) {
  nextArgs.push('-p', '3000');
}
if (!nextArgs.includes('-H') && !nextArgs.includes('--hostname')) {
  nextArgs.push('-H', '0.0.0.0');
}

const child = spawn('npx', ['next', ...nextArgs], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
