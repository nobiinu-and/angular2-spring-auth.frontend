import { Routes } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { MemberOnlyRoutes } from './+member-only/index';
import { LoginRoutes } from './+login/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...MemberOnlyRoutes,
  ...LoginRoutes
];
