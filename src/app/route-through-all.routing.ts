import { Routes, RouterModule } from '@angular/router';
import { ExampleAComponent } from './shared/example-a/example-a.component';
import { ExampleBComponent } from './shared/example-b/example-b.component';
import { ExampleCComponent } from './shared/example-c/example-c.component';

const routes: Routes = [
  {}
];

export const RouteThroughAllRoutes = RouterModule.forChild(routes);
