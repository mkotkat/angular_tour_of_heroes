import { Component, OnInit } from '@angular/core';
import { Hero } from './DataModel/hero';
import { HeroService } from './Services/hero.service';

import { Router } from '@angular/router'


// <hero-detail [hero]="SelectedHero"> </hero-detail>


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit { 

  //hero : Hero = {id : 1, name : 'Windstorm'};

  heroes : Hero[];

  SelectedHero : Hero;

  constructor(
    private heroService: HeroService ,
    private router : Router
  ) { }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();  // synchronous
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); 
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); 
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : Hero){
    this.SelectedHero = hero;
  }

  gotoDetail() :void {
      this.router.navigate(['/detail', this.SelectedHero.id]);
  }

}
