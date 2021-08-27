import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ClsComponent } from './cls/cls.component';
import { ServersComponent } from './servers/servers.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ClsComponent,
    ServersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
