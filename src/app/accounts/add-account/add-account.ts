import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  imports: [FormsModule],
  templateUrl: './add-account.html',
  styleUrl: './add-account.css',
})
export class AddAccount {
  allStatus = ['', 'Active', 'Inactive', 'Unknown']

  @Output() eventToHomeAccount = new EventEmitter();
    
    addHandler(nameValue : string, statusValue : string) {
        this.eventToHomeAccount.emit( 
            {
                name : nameValue,
                status : statusValue
            }
        )
    }
}
