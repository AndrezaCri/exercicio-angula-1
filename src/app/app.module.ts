import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, UserModule ],
  providers: [],
  bootstrap: [ AppComponent ],
  exports: []
})
export class AppModule { }
