import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeluguComponent } from './telugu/telugu.component';
import { TsongsComponent } from './tsongs/tsongs.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'telugu',component:TeluguComponent},
  {path:'tsongs/:id',component:TsongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
