import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { from } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  hero = 'windstorm';
  constructor() { }

  ngOnInit() {
  }

}
