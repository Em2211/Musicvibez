import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HttpClientModule} from '@angular/common/http';
import { TsongsComponent } from './tsongs/tsongs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeluguComponent,
    TsongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
