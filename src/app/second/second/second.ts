import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
@Input() txtColor : string = "green";
@Input() studentName : string = "Imen";

 @Output() eventToParent = new EventEmitter();
 sendEventToFirst() {
    this.eventToParent.emit("Message de la part du Second Component");
 }
}
