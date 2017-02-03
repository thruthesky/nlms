import { Component } from '@angular/core';
@Component({
  selector: `app-component`,
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
  constructor() {
    
  }
  onDevinceReady() {
    console.log("yes, I am running in cordova.");
  }
  
}
