import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EightStepGuidComponent } from './eight-step-guid/eight-step-guid.component';
import { JumpstartSessionPageComponent } from './jumpstart-session-page/jumpstart-session-page.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: 'eight-steps',
    component: EightStepGuidComponent
  },
  {
    path: 'jumpstart',
    component: JumpstartSessionPageComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: '',
    redirectTo: 'eight-steps',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
