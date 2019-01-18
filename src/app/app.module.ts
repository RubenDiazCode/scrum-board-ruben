import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ShowListComponent } from './show-list/show-list.component';
import { AddNewListComponent } from './add-new-list/add-new-list.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { DataManagerService } from './data-manager.service';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginVIewComponent } from './login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ShowListComponent,
    AddNewListComponent,
    ListComponent,
    TaskComponent,
    RegisterViewComponent,
    LoginVIewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
