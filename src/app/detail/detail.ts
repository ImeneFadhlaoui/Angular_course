import { Component, Input } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';

@Component({
  selector: 'app-detail',
  imports: [NoAvatarPipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css',
})
export class Detail {
@Input() selCandidat?: Candidat;}
