import { DatePipe, NgClass, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ShortPipe } from '../pipes/short-pipe';
import { FilterPipe } from '../pipes/filter-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-servers',
  imports: [NgClass, TitleCasePipe, UpperCasePipe , DatePipe, ShortPipe, FilterPipe,FormsModule],
  templateUrl: './manage-servers.html',
  styleUrl: './manage-servers.css',
})
export class ManageServers {

  selectedStatus : string = '';
  servers = [
    {
      name : "Production Server",
      type : "medium",
      date: new Date(2026, 3, 4),
      status: "critical"
    },
      {
      name : "Testing Development Server",
      type : "medium",
      date: new Date(2026, 3, 4),
      status: "stable"
    },
      {
      name : "Development Server",
      type : "medium",
      date: new Date(2026, 3, 4),
      status: "offline"
    },
      {
      name : "Imen Server",
      type : "medium",
      date: new Date(2026, 3, 4),
      status: "stable"
    },
  ];
  
  addServer(){
    this.servers.push(
      {
        name : "NEW SERVER",
        type: "small",
        date: new Date(2024,4,5),
        status: "stable"
      }
    )
  }

  affecterClass(serv : any){
    return{
      'list-group-item-success' : serv.status == 'stable' ,
      'list-group-item-danger' : serv.status == 'critical' ,
      'list-group-item-warning' : serv.status == 'offline'
    }
  }
  
}
