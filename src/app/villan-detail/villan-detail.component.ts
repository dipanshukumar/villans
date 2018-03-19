import { Component, OnInit, Input } from '@angular/core';
import { Villan } from '../villans/villans';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VillanService } from '../villan.service';

@Component({
  selector: 'app-villan-detail',
  templateUrl: './villan-detail.component.html',
  styleUrls: ['./villan-detail.component.css']
})
export class VillanDetailComponent implements OnInit {
  @Input() villan: Villan;

  constructor(
    private route: ActivatedRoute,
    private villanService: VillanService,
    private location: Location) { }

  ngOnInit(): void {
    this.getVillans();
  }

  getVillans(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.villanService.getVillans(id)
      .subscribe(villans => this.villan = villans);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.villanService.updateVillan(this.villan)
      .subscribe(() => this.goBack());
  }
}

