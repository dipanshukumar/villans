import { Component, OnInit } from '@angular/core';
import { Villan } from './villans';
import { VillanService } from '../villan.service';

@Component({
  selector: 'app-villans',
  templateUrl: './villans.component.html',
  styleUrls: ['./villans.component.css']
})
export class VillansComponent implements OnInit {

 villans: Villan[];


  constructor(private villanService: VillanService) { }
  ngOnInit() {
    this.getVillan();
  }

  getVillan(): void {
    this.villanService.getVillan()
      .subscribe(villan => this.villans = villan);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villanService.addVillan({ name } as Villan)
      .subscribe(villan => {
        this.villans.push(villan);
      });
  }

  delete(villan: Villan): void {
    this.villans = this.villans.filter(h => h !== villan);
    this.villanService.deleteVillan(villan).subscribe();
  }

}


