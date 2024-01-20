import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'mfe-angular',
    loadChildren: () =>
      import('mfe-angular/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'mfe-react',
    component: WebComponentWrapper,
    data:{
      type:'module',
      remoteEntry:'http://localhost:4202/remoteEntry.js',
      remoteName:'mfe-react',
      exposedModule:'./mainModule',
      elementName:'mfe-react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
