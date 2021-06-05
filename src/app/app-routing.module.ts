import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HindiComponent } from './hindi/hindi.component';
import { HomeComponent } from './home/home.component';
import { HsongsComponent } from './hsongs/hsongs.component';
import { KannadaComponent } from './kannada/kannada.component';
import { KannadasongsComponent } from './kannadasongs/kannadasongs.component';
import { TamilComponent } from './tamil/tamil.component';
import { TamilsongsComponent } from './tamilsongs/tamilsongs.component';
import { TeluguComponent } from './telugu/telugu.component';
import { TsongsComponent } from './tsongs/tsongs.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'favourites',component:FavouritesComponent},  
  {path:'home/telugu',component:TeluguComponent},
  {path:'home/telugu/:id',component:TsongsComponent},
  {path:'home/hindi',component:HindiComponent},
  {path:'home/hindi/:id',component:HsongsComponent},
  {path:'home/tamil',component:TamilComponent},
  {path:'home/tamil/:id',component:TamilsongsComponent},
  {path:'home/kannada',component:KannadaComponent},
  {path:'home/kannada/:id',component:KannadasongsComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
