import { Component, OnInit } from '@angular/core';
import { Villan } from '../villans/villans';
import { VillanService } from '../villan.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashboardComponent implements OnInit {
  villans: Villan[] = [];

  constructor(private villanService: VillanService) { }

  ngOnInit() {
    this.getvillan();
  }

  getvillan(): void {
    this.villanService.getVillan()
      .subscribe(villans => this.villans = villans.slice(1, 5));
  }
}

