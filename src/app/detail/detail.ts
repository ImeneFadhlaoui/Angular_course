import { Component, Input, inject } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { GestionRecrues } from '../services/gestion-recrues';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [NoAvatarPipe, RouterLink],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
  @Input() selCandidat!: Candidat;
  
  private recSer = inject(GestionRecrues)

  ajouterRecrue(){
    this.recSer.addRecrue(this.selCandidat)
  }
  
}