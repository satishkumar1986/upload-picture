import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MultipleWithShowComponent } from './components/multiple-with-show/multiple-with-show.component';
import { MultipleComponent } from './components/multiple/multiple.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upload-single-pic', component: SingleComponent },
  { path: 'upload-multiple-pic', component: MultipleComponent },
  { path: 'upload-and-show-pic', component: MultipleWithShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }