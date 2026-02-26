import { Component, Input } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
@Input() selCandidat?: Candidat;}
