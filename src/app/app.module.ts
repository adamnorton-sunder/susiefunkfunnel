import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EightStepGuidComponent } from './eight-step-guid/eight-step-guid.component';
import { JumpstartSessionPageComponent } from './jumpstart-session-page/jumpstart-session-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EightStepGuidComponent,
    JumpstartSessionPageComponent,
    ThankyouComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
