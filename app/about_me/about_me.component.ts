import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    templateUrl: 'app/about_me/about_me.component.html',
    styleUrls: ['app/about_me/about_me.component.css'],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})
export class AboutMeComponent implements  OnInit {
    pageTitle: string = 'About Me Content';
    listFilter: string;

    // add services to constructor
    constructor() {}

    ngOnInit(): void {
        // console.log('hello about-me init')
    }
}