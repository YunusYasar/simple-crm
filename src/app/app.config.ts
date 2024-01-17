import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(routes),
      provideAnimations(),
      importProvidersFrom(
         provideFirebaseApp(() =>
            initializeApp({
               //
               projectId: 'simple-crm-a0c89',
               appId: '1:805409368633:web:235ba18a467eefbeed7be8',
               storageBucket: 'simple-crm-a0c89.appspot.com',
               apiKey: 'AIzaSyB2HfL3bN50oMFBJPv2uksSRXjH0nUcdDw',
               authDomain: 'simple-crm-a0c89.firebaseapp.com',
               messagingSenderId: '805409368633',
            })
         )
      ),
      importProvidersFrom(provideFirestore(() => getFirestore())),
   ],
};
