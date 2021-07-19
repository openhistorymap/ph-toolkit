import { EventEmitter, Injectable } from '@angular/core';
import { Deeplink } from 'electron-deeplink';
import { App, app, remote } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {

  // private deeplink: Deeplink;
  // public deeplinkReceived: EventEmitter < string > = new EventEmitter < string > ();
  // constructor() {

  //   this.deeplink = new Deeplink({
  //     app: app,
  //     mainWindow: remote.getCurrentWindow(),
  //     protocol: 'ohm',
  //     isDev: false,
  //     debugLogging: true,
  //     electronPath: null
  //   })

  //   this.deeplink.on('received', (link) => {
  //     this.deeplinkReceived.emit(link);
  //   });
  // }
}
