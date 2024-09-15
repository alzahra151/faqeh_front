import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hero-navbar',
  standalone: true,
  imports: [  MatToolbarModule,
  MatSidenavModule,
    MatIconModule,
  RouterOutlet],
  templateUrl: './hero-navbar.component.html',
  styleUrl: './hero-navbar.component.scss'
})
export class HeroNavbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  opened: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  clickHandler() {
    this.sidenav.close();
  }
}
