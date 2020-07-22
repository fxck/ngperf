import { Component } from '@angular/core';
import range from 'lodash-es/range';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible = true;
  data = range(0, 200);

  trackByIndex(index: number) {
    return index;
  }

}
