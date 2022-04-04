import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./app.headercomponent.html'
})
export class AppHeaderComponent {
    title = 'My World 2022'; // exchanging data b/w component and html file is called interpolation
}