import { Route } from '@angular/router';
import { MemberOnlyComponent } from './index';
import { AuthGuardService } from '../shared/auth-guard/index';

export const MemberOnlyRoutes: Route[] = [
  {
    path: 'member-only',
    component: MemberOnlyComponent,
    canActivate: [ AuthGuardService ]
  }
];
