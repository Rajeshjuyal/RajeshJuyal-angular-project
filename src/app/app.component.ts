import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RajeshJuyal ';
  name = 'hello';
  disabledBox = true;
  enableBox() {
    this.disabledBox = false;
  }
}
