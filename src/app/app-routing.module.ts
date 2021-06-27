import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { SongsComponent } from './songs/songs.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'favourites',component:FavouritesComponent},  
  {path:'home/:id',component:LanguageComponent},
  {path:'home/Telugu/:id',component:SongsComponent},
  {path:'home/Hindi/:id',component:SongsComponent},
  {path:'home/Tamil/:id',component:SongsComponent},
  {path:'home/Kannada/:id',component:SongsComponent},

  {path:'albums/artists/:id',component:ArtistsongsComponent},
  {path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
