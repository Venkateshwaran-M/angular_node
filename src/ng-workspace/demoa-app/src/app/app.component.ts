import { Component } from '@angular/core';

@Component({
  selector: 'my-root', // should follow kebab style not snake
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'theni';
  
onBoxValueChange(paramData: any)
{
  console.log("app component: " + paramData.value);
}

}
 