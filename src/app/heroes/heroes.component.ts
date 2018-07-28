import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  isSpecial = false;

  hero: Hero = {
    id: 1,
    name: 'Winstorm'
  };

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedHero);
  }

  onSave(event: any) {
    console.log(event);
    console.log(this.isSpecial);
  }

  onSelected(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }
}
