import { Component } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialogModule, MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-dialog-edit-user',
   standalone: true,
   imports: [
      MatDialogModule, //
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      FormsModule,
      MatProgressBarModule,
      CommonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
   ],
   templateUrl: './dialog-edit-user.component.html',
   styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent {
   user = new User();
   birthDate!: Date;
   loading: boolean = false;

   constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

   updateUser() {}
}
