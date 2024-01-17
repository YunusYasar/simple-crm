import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-user',
   standalone: true,
   imports: [
      MatIconModule, //
      MatButtonModule,
      MatTooltipModule,
      MatDialogModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      FormsModule,
      MatCardModule,
      CommonModule,
      RouterLink,
   ],
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.scss'],
})
export class UserComponent {
   user: User = new User();
   allUsers: User[] = [];

   constructor(public dialog: MatDialog, private firestore: Firestore) {}
   ngOnInit() {
      const usersCollection = collection(this.firestore, 'users');
      collectionData(usersCollection, { idField: 'customIdName' }).subscribe((changes: any) => {
         console.log('Received changes from DB', changes);
         this.allUsers = changes;
      });
   }
   openDialog() {
      this.dialog.open(DialogAddUserComponent);
   }
}
