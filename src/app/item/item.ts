import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { CustomDir } from '../custom-dir';

@Component({
  selector: 'app-item',
  imports: [CustomDir,NoAvatarPipe],
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
