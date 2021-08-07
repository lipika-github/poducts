import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-portal';
  public isLoggedIn = false;

  constructor(
    private _service:AppService){}

  ngOnInit():void {
    this.isLoggedIn = this._service.checkCredentials();
  }
}
