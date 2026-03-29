import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule],
})
export class AboutPage {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/home']);
  }
}
