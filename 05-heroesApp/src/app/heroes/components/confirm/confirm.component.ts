import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [`
    .options{
      display: flex;
      justify-content: flex-end;
    }
  `],
})
export class ConfirmComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}
    ngOnInit(){
      console.log(this.data)
    }
  deleteChar() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }
}
