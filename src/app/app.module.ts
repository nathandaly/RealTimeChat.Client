import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChannelService } from './sidebar/_shared/channel.service';
import { ContainerModule } from './container/container.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './core/_shared/global-error-handler.service';
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
    FormsModule,

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
    InMemoryDataService,
    ChannelService,
    GlobalErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
