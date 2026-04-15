import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecrues {
  allRecrues : Candidat[] = [];

  addRecrue(newRecrue : Candidat){
    if(this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue)
    else
      alert("Ce candidat a deja ete recrute !")
  }
}
