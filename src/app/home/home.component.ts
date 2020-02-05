import { Component, OnInit } from '@angular/core';
import {SwUpdate } from '@angular/service-worker';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  update = false;
  skills: any;
  constructor(updates: SwUpdate , private dataservice: DataService) {
    updates.available.subscribe(event => {
      this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit(): void {
    // this.dataservice.GetSkillList().subscribe(res => {
    //   this.skills = res['Data'];
    // });
  }

}
