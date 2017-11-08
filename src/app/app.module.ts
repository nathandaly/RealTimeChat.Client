import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerModule } from './container/container.module';
import { CoreModule } from './core/core.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    ModalModule.forRoot(),
    CoreModule,
    ContainerModule,
    SidebarModule
  ],
  providers: [
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
