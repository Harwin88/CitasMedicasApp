import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './medicos/medicos.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgxMasonryModule } from 'ngx-masonry';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { CitasComponent } from './citas/citas.component';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  exports:[
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    MedicosComponent,
    CitasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    NgxMasonryModule,
    MatTooltipModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatTabsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
