import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PhotosComponent } from './components/photos/photos.component';
import 'hammerjs';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ImageService} from './shared/image.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, MatInputModule, FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
