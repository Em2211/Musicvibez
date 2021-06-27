import { NgModule } from '@angular/core';
import { AngMusicPlayerModule } from  'ang-music-player';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { LanguageComponent } from './language/language.component';
import { SongsComponent } from './songs/songs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    FavouritesComponent,
    ArtistsongsComponent,
    LanguageComponent,
    SongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngMusicPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
