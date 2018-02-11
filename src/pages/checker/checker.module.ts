import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckerPage } from './checker';

@NgModule({
  declarations: [
    CheckerPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckerPage),
  ],
})
export class CheckerPageModule {}
