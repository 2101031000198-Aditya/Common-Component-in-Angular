import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: any;

  constructor(public dialog: MatDialog) { }

  openPopup(event: MouseEvent): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: { name: this.item.name },
      position: {
        top: (event.clientY + 10) + 'px',
        left: (event.clientX + 10) + 'px',
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}



