import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditServer } from './edit-server/edit-server';
import { InfoServer } from './info-server/info-server';
import { ListServers } from './list-servers/list-servers';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditServer, InfoServer, ListServers],
  imports: [
    CommonModule,
    SUB_ROUTING,
    FormsModule
  ]
})
export class SubModule { }
