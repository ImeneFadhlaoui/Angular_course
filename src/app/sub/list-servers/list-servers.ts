import { Component, inject } from '@angular/core';
import { GestionServers } from '../gestion-servers';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.html',
  styleUrl: './list-servers.css',
  standalone: false,

})
export class ListServers {
 serversSer = inject(GestionServers)
}
