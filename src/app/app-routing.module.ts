import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './modules/page/components/page/page.component';
import { PageModule } from './modules/page/page.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: ':config', component: PageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PageModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
