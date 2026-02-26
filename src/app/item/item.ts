import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {

  @Input() oneCandidate !: Candidat;
  @Output() eventToList = new EventEmitter<Candidat>();
 sendCondidateToList() {
    this.eventToList.emit(this.oneCandidate);
 }
}
