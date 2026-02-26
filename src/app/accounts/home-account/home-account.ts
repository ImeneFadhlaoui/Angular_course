import { Component } from '@angular/core';
import { AddAccount } from '../add-account/add-account';
import { ItemAccount } from '../item-account/item-account';

@Component({
  selector: 'app-home-account',
  imports: [AddAccount, ItemAccount],
  templateUrl: './home-account.html',
  styleUrl: './home-account.css',
})
export class HomeAccount {
  tabAccounts = [
    {
      name : "Imen Account",
      status : "Active",
    },
       {
      name : "Siwar Account",
      status : "Inactive",
    }
  ]

  addAccount(newAccount: { name: string; status: string }){
    this.tabAccounts.push(newAccount);
  }
}
