import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

describe('AppComponent', () => {
   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [AppComponent, CommonModule, BrowserModule],
      }).compileComponents();
   });

   it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
   });

   // it(`should have the 'simple-crm' title`, () => {
   //   const fixture = TestBed.createComponent(AppComponent);
   //   const app = fixture.componentInstance;
   //   expect(app.title).toEqual('simple-crm');
   // });
});
