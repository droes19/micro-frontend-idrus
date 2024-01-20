import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'micro-frontend-idrus-mfe-angular-entry',
  template: `<micro-frontend-idrus-nx-welcome></micro-frontend-idrus-nx-welcome>`,
})
export class RemoteEntryComponent {}
