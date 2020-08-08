import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-server',//element selector --> <app-server></app-server>
  //selector: '[app-server]',//attribute selector -> <div app-server></div>
  selector: '.app-server',//class selector -> <div class = "app-server"></div>
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  //start - data binding using string interpolation
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
  //end - data binding using string interpolation

  //start - property binding 
  isAllowNewServer = false;
  //end - property binding 
  constructor() { 
    //start - property binding 
    setTimeout(() => {
      this.isAllowNewServer = true;
    }, 2000);
    //end - property binding 
  }

  //start - event binding
  serverCreateStatus: string = 'No Server created!';

  onCreateServer() {
    this.serverCreateStatus = 'Server was created!'
  }
  //end - event binding

  //start - two way data binding
  serverName: string = 'Test';

  //end - two way data binding
  ngOnInit(): void {
  }


}
