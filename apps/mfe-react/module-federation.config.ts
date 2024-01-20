import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-react',

  exposes: {
    './Module': './src/remote-entry.ts',
    './bootstrapModule': './src/bootstrap.tsx',
    './mainModule': './src/main.tsx',
  },
};

export default config;
