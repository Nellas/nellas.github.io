import { Component, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    templateUrl: 'app/development/development.component.html',
    styleUrls: ['app/development/development.component.css'],
    pipes: [],
    directives: [ROUTER_DIRECTIVES]
})

export class DevelopmentComponent implements OnInit {
    pageTitle: string='Development Content';

    // add services to contructor
    constructor() {}

    ngOnInit(): void {
        // console.log('hello development init')
    }
}