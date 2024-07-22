// popup.component.ts
import { Component, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PopupComponent>
  ) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    // Close the dialog when clicking outside of it
    const element = event.target as HTMLElement;
    if (!element.closest('.mat-dialog-container')) {
      this.dialogRef.close();
    }
  }
}
