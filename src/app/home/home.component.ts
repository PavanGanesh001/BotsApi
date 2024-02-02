import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isOpen = true;

  public isMobile = false;
  constructor() {
    if (this.isMobileDevice()) {
      this.isMobile = true;
    }
  }
  public isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent
    );
  }

  ngOnInit(): void {}
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
