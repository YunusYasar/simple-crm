import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogDeleteUserComponent } from './dialog-delete-user.component';
import { Router, RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

describe('DialogDeleteUserComponent', () => {
   let component: DialogDeleteUserComponent;
   let fixture: ComponentFixture<DialogDeleteUserComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [DialogDeleteUserComponent, RouterModule.forRoot([])],
         providers: [Firestore, Router],
      }).compileComponents();

      fixture = TestBed.createComponent(DialogDeleteUserComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
