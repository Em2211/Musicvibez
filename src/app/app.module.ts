import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { DownloadComponent } from './download/download.component';
import { SignupComponent } from './signup/signup.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AlbumsComponent } from './albums/albums.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ArtistsongsComponent } from './artistsongs/artistsongs.component';
import { LanguageComponent } from './language/language.component';
import { SongsComponent } from './songs/songs.component';
import { GenreComponent } from './genre/genre.component';
import { TophitsComponent } from './tophits/tophits.component';
import { SearchPipe } from './search.pipe';
//import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DownloadComponent,
    SignupComponent,
    HelpComponent,
    FooterComponent,
    HomeComponent,
    AlbumsComponent,
    FavouritesComponent,
    ArtistsongsComponent,
    LanguageComponent,
    SongsComponent,
    GenreComponent,
    TophitsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    //AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }