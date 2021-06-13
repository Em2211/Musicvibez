import { NgModule } from '@angular/core';
import { AngMusicPlayerModule } from  'ang-music-player';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HttpClientModule} from '@angular/common/http';
import { TsongsComponent } from './tsongs/tsongs.component';
import { AlbumsComponent } from './albums/albums.component';
import { HindiComponent } from './hindi/hindi.component';
import { HsongsComponent } from './hsongs/hsongs.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { TamilComponent } from './tamil/tamil.component';
import { TamilsongsComponent } from './tamilsongs/tamilsongs.component';
import { KannadaComponent } from './kannada/kannada.component';
import { KannadasongsComponent } from './kannadasongs/kannadasongs.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeluguComponent,
    TsongsComponent,
    AlbumsComponent,
    HindiComponent,
    HsongsComponent,
    FavouritesComponent,
    TamilComponent,
    TamilsongsComponent,
    KannadaComponent,
    KannadasongsComponent,
    ArtistsongsComponent
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
