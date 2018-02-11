import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { CheckerPage } from '../pages/checker/checker';
import { ExcoPage } from '../pages/exco/exco';
import { EventsPage } from '../pages/events/events';
import { SettingPage } from '../pages/setting/setting';
import { PostProvider } from '../providers/post/post';
import { PostpagePage} from '../pages/postpage/postpage'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    CheckerPage,
    ExcoPage,
    EventsPage,
    SettingPage,
    PostpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],    
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    CheckerPage,
    ExcoPage,
    EventsPage,
    SettingPage,
    PostpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostProvider,
    
  ]
})
export class AppModule {}
