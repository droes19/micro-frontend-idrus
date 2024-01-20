import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'mfe-angular',
  exposes: {
    './Routes': 'apps/mfe-angular/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
