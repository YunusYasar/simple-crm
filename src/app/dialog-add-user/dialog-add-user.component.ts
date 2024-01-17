import { Component, inject } from '@angular/core';
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
   selector: 'app-dialog-add-user',
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
   templateUrl: './dialog-add-user.component.html',
   styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
   user = new User();
   birthDate!: Date;
   loading: boolean = false;

   constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

   async saveUser() {
      this.loading = true;
      this.user.birthDate = this.birthDate.getTime();
      console.log('current user is', this.user);
      await addDoc(collection(this.firestore, 'users'), this.user.toJSON());
      console.log('adding user finished');
      this.loading = false;
      this.dialogRef.close();
   }
}
