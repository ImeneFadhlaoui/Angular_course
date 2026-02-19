import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Second } from '../second/second/second';

@Component({
  selector: 'app-first',
  imports: [FormsModule, Second],
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

  traitement(msg : any) {
      console.log(msg);
      this.prenom = msg
        
    }

}
