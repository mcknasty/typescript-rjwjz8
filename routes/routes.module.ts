import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class RoutesModule {}
