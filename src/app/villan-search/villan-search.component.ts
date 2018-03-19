import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Villan } from '../villans/villans';
import { VillanService } from '../villan.service';


@Component({
  selector: 'app-villan-search',
  templateUrl: './villan-search.component.html',
  styleUrls: ['./villan-search.component.css']
})
export class VillanSearchComponent implements OnInit {
  villans$: Observable<Villan[]>;
  private searchTerms = new Subject<string>();

  constructor(private villanService: VillanService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.villans$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.villanService.searchVillans(term)),
    );
  }
}

