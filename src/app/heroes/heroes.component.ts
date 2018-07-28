import { Component, OnInit } from '@angular/core';
// @ts-ignore
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
  constructor() { }

  ngOnInit() {
  }

  onSave(event: any) {
    console.log(event);
    console.log(this.isSpecial);
  }
}
