import { Component } from '@angular/core';
import {ThisReceiver} from "@angular/compiler";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverNumber: number = 20;
  serverName!: string;
  serverCreationStatus!: string;
  isDisabled: boolean = false;
  imgUrl:string = 'https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj'
  onUpdateServer(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
    this.isDisabled = true;
  }

  onCreateServer(event: any) {
    console.log(event);
    this.serverCreationStatus = 'Server created!'
  }
}
