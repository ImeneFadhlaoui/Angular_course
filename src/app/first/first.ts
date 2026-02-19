import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  prenom : string = 'Imen';
  year: number = 2026;

  bgColor : string = 'pink';
  hd : boolean = false;

  clickHandler(){
    alert("J'ai été cliqué")
  }

  updatePrenom(inpValue : any){
    this.prenom=inpValue;
  }

}
