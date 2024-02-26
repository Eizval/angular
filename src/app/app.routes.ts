import { Routes } from '@angular/router';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { ExampleBComponent } from './shared/example-b/example-b.component';
import { ExampleCComponent } from './shared/example-c/example-c.component';
import { ExampleOneComponent } from './shared/example-one/example-one.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { SqlComponent } from './shared/sql/sql.component';
import { CloneZillaComponent } from './shared/clone-zilla/clone-zilla.component';

export const routes: Routes = [
  { path: 'ExampleAComponent', component: ExampleAComponent  },
  { path: 'ExampleBComponent', component: ExampleBComponent  },
  { path: 'ExampleCComponent', component: ExampleCComponent  },
  { path: 'ExampleOne', component: ExampleOneComponent  },
  { path: 'HomePage', component: HomepageComponent  },
  { path: 'SQL', component: SqlComponent  },
  { path: 'CloneZilla', component: CloneZillaComponent  },
];
