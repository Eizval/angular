import { Routes } from '@angular/router';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { ExampleBComponent } from './shared/example-b/example-b.component';
import { ExampleCComponent } from './shared/example-c/example-c.component';
import { ExampleOneComponent } from './shared/example-one/example-one.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { SqlComponent } from './shared/sql/sql.component';
import { CloneZillaComponent } from './shared/clone-zilla/clone-zilla.component';
import { LoginComponent } from './shared/login/login.component';
import { yourGuardGuard } from './your-guard.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'ExampleAComponent', component: ExampleAComponent, canActivate: [yourGuardGuard]  },
  { path: 'ExampleBComponent', component: ExampleBComponent, canActivate: [yourGuardGuard]  },
  { path: 'ExampleCComponent', component: ExampleCComponent, canActivate: [yourGuardGuard]  },
  { path: 'ExampleOne', component: ExampleOneComponent, canActivate: [yourGuardGuard]  },
  { path: 'HomePage', component: HomepageComponent  },
  { path: 'SQL', component: SqlComponent, canActivate: [yourGuardGuard]  },
  { path: 'CloneZilla', component: CloneZillaComponent, canActivate: [yourGuardGuard]  },
  { path: 'Login', component: LoginComponent  },
];
