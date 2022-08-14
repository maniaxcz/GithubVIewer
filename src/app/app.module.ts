import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UserDirectiveDirective } from './user-component/user-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    UserDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [UserComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
