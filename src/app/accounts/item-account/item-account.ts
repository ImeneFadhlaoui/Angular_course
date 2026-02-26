import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  imports: [],
  templateUrl: './item-account.html',
  styleUrl: './item-account.css',
})
export class ItemAccount {
  @Input() oneAccount!: { name: string; status: string };

  updateStatus(newStatus: string) {
    this.oneAccount.status = newStatus;
  }
}
