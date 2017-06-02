import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodoServiceService } from './todo-service.service';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
       {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
