import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:FormComponent},
      {path:'create',component:PostComponent},


    ])
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
