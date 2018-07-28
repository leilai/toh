import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

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

  constructor() { }

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
    console.log(this.isSpecial);
  }
}
