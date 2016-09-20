import { Component } from 'angular2/core';

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {
    public pageTitle: string = "Home Content";
}