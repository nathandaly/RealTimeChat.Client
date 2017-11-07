import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './container/container.component';
import { ContainerFooterComponent } from './container/footer/footer.component';
import { ContainerHeaderComponent } from './container/header/header.component';
import { ContainerMessagesComponent } from './container/messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MessageService } from './message.service';
import { MessagesMessageComponent } from './container/messages/message/message.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { SidebarChannelsComponent } from './sidebar/channels/channels.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarMessagesComponent } from './sidebar/messages/messages.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    SidebarComponent,
    SidebarChannelsComponent,
    SidebarMessagesComponent,
    ContainerComponent,
    ContainerHeaderComponent,
    ContainerFooterComponent,
    ContainerMessagesComponent,
    MessagesMessageComponent
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

    ModalModule.forRoot()
  ],
  providers: [
    MessageService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
