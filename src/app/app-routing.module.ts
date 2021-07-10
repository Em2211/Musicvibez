import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { SongsComponent } from './songs/songs.component';
import { TophitsComponent } from './tophits/tophits.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'favourites',component:FavouritesComponent},  
  {path:'home/:id',component:LanguageComponent},
  {path:'home/mood/:id',component:GenreComponent},
  {path:'home/tophits/:id',component:TophitsComponent},
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
