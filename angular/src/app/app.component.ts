import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';

  constructor() {
    this.testWS();
  }

  testWS() {
    const subject = webSocket('ws://localhost:8080');

    // llama al listener events que se dispara del lado del servidor
    subject.next({
      event: 'events',
      data: 'test',
    });

    subject.next({
      event: 'identity',
      data: 1,
    });

    // subject.pipe(select('identity')).subscribe(
    subject.pipe(select('events')).subscribe(
      (data) => console.log(data),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }
}

// Operator
export const select = (needle: string = '') => filter((data: any)  => data.event === needle );
