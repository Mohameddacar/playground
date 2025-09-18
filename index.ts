import concurrently from 'concurrently';

concurrently([
  {
    name: 'server',
    command: 'npm run dev',
    cwd: 'packages/server',
    prefixColor: 'cyan',
  },
  {
    name: 'client',
    command: 'npm run dev',
    cwd: 'packages/clients',
    prefixColor: 'magenta',
  }
]);
