import { Component, OnInit } from '@angular/core';
import { io, Manager  } from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngsocket';

  ngOnInit(): void
  {
    /*const socket = new Manager ('http://localhost:3000');
    const socketio = io('http://localhost:3000');

    socketio.on('hello', (data) => {
      console.log('data from socket:', data);

    });*/
  }
}
