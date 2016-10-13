/**
 * Created by filip on 10/11/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);