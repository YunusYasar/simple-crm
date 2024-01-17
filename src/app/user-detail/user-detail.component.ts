import { Component } from '@angular/core';
import { Firestore, collection, doc, getDoc, onSnapshot } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Component({
   selector: 'app-user-detail',
   standalone: true,
   imports: [
      MatCardModule, //
      MatIconModule,
      MatButtonModule,
      MatMenuModule,
   ],
   templateUrl: './user-detail.component.html',
   styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
   userId: string = '';
   user: User = new User();

   constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) {}

   ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap) => {
         this.userId = paramMap.get('id') ?? '';
         console.log('Got ID', this.userId);
         this.getUser();
      });
   }
   async getUser() {
      if (!this.userId) return;

      try {
         const userRef = doc(this.firestore, 'users', this.userId);
         const userSnap = await getDoc(userRef);

         if (userSnap.exists()) {
            this.user = userSnap.data() as User;
            console.log('User Details:', this.user);
         } else {
            console.log('No such user!');
         }
      } catch (error) {
         console.error('Error fetching user', error);
      }
   }

   editMenu() {
      const dialog = this.dialog.open(DialogEditUserComponent);
      dialog.componentInstance.user = new User(this.user);
   }
   deleteUser() {
      const dialog = this.dialog.open(DialogDeleteUserComponent);
   }
}
