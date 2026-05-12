import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServers } from '../gestion-servers';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.html',
  styleUrl: './info-server.css',
  standalone: false,
})
export class InfoServer {
  selectedServer: any;
  blockAccess: boolean = false;
  actRoute = inject(ActivatedRoute);
  serverSer = inject(GestionServers)

  ngOnInit(){
    this.actRoute.paramMap.subscribe(
      {
        next : (p : ParamMap) => {
          this.selectedServer = this.serverSer.getServerById(p.get('idServer'))
          
        }
      }
    );

    this.actRoute.queryParamMap.subscribe({
      next : (p : ParamMap) => {
        this. blockAccess = p.get('allowEdit') == '1' ? false : true;
      }
      
    }
    )


  }
}
