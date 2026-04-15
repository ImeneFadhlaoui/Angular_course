import { Component, inject } from '@angular/core';
import { Liste } from '../liste/liste';
import { Detail } from '../detail/detail';
import { Candidat } from '../models/Candidat';
import { GestionCandidats } from '../services/gestion-candidats';
import { First } from '../services/first';
import { Recrues } from '../recrues/recrues';

@Component({
  selector: 'app-cv',
  imports: [Liste,Detail,Recrues],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
  providers: [First]
})
export class Cv {

  tabCandidats : Candidat[] = [];
  selectedCandidat!: Candidat;   

  //1ere méthode
  constructor(private firstSer : First) {}


 //2ème méthode
//private firstSer = inject(First);
  private candSer = inject(GestionCandidats);

  ngOnInit() {
    this.tabCandidats = this.candSer.getAllCandidates();
  }
  
  addHandler() {
    this.candSer.addCandidate();
  }
  
  showListCandidates() {
    console.log(this.candSer.getAllCandidates());
  }

   recupererCandidatSelectionne(cand: Candidat) { 
    this.selectedCandidat = cand;
  
   }
}
