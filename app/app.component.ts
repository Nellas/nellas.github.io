import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';  // load the full set of observable operators
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

import { AboutMeComponent } from './about_me/about_me.component';
import { DevelopmentComponent } from './development/development.component'
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'nellas-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/about-me', name: 'AboutMe', component: AboutMeComponent },
    { path: '/development', name: 'Development', component: DevelopmentComponent }
])

export class AppComponent {
    pageTitle: string = 'Nellas dot Me'

}