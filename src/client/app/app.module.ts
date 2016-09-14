import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './+about/about.module';
import { HomeModule } from './+home/home.module';
import { MemberOnlyModule } from './+member-only/member-only.module';
import { LoginModule } from './+login/login.module';
import { SharedModule } from './shared/shared.module';
import { RestApiDefaultRequestOptions } from './shared/index';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), 
  AboutModule, HomeModule, MemberOnlyModule, LoginModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>' },
    { provide: RequestOptions, useClass: RestApiDefaultRequestOptions },
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
