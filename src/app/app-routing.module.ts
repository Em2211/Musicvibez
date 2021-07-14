import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { DownloadComponent } from './download/download.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { GenreComponent } from './genre/genre.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SongsComponent } from './songs/songs.component';
import { TophitsComponent } from './tophits/tophits.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'signup',component:SignupComponent},
  {path:'download',component:DownloadComponent},
  {path:'help',component:HelpComponent},
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

  //{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }