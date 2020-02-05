import { Component, OnInit } from '@angular/core';
import {SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pageHeading = '';
  version = '1.0';
  isNavVisible = false;
  constructor(private swUpdate: SwUpdate) {

  }
  ShowHideBar(headerText: string) {
    this.isNavVisible = !this.isNavVisible;
    switch (headerText) {
      case 'dashboard':
        {
          this.pageHeading = 'Dashboard';
          break;
        }
      case 'todo':
        {
          this.pageHeading = 'To-Do';
          break;
        }
      case 'about':
        {
          this.pageHeading = 'About';
          break;
        }
      case 'contact':
        {
          this.pageHeading = 'Contact';
          break;
        }
        default:
        {
          this.pageHeading = '';
          break;
        }
    }
  }
  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }
  }
 
}
