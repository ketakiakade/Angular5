import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { WarningAlertComponent } from '../warningAlert/warningAlert.component';
import { SuccessAlertComponent } from '../successAlert/successAlert.component';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= 'No Server Created';
  serverName ='';
  userName = '';
  allowAddingUser = false;
  userAddedMessage = '';
  serverCreated = false;
  paraStatus = false;
  servers = ['Template1', 'Template2'];
  hideShow = false;
  timeStamps = [];

  constructor () {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'New Server Created! name is :' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  onAddingUser() {
    this.userAddedMessage = 'User was added. User Name is:' + this.userName;
    this.userName = '';
  }

  getParaStyle()
  {
    let result =  this.paraStatus === true ? 'displayPara' : 'hidePara';
   // this.paraStatus = !this.paraStatus;
    console.log(result,this.paraStatus);
    return result;
  }

  logTimestamp()
  {
    let time = new Date();
    this.timeStamps.push(time.toString());
    this.hideShow = !this.hideShow
    /*var result =  this.paraStatus === true ? 'displayPara' : 'hidePara';
    this.paraStatus = !this.paraStatus;
    return result;*/
    return this.hideShow;
  }

  ChangeColor(s){ 
       console.log(s);
      // if(this.timeStamps.indexOf(s) > 1)
      // {
      //   return  'red' ;
      // }
      // else
      // {
      //   return 'blue';
      // }
      if(s > 2) return 'red';
      else return 'blue'
  }  
}
