import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServers {
  
  allServers = [
    {
      id: 1,
      name: 'Nidhal Server',
      status: 'offline'
    },
     {
      id: 2,
      name: 'Imen Server',
      status: 'offline'
    },
     {
      id: 3,
      name: 'Rawen Server',
      status: 'offline'
    },

  ];

  getServerById(serverId : any) {
    return this.allServers.find(s => s.id == serverId)
  }
}
