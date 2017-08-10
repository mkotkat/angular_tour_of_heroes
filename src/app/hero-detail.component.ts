//import { Component, Input, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './DataModel/hero';
import { HeroService } from './Services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    
  //@Input() hero: Hero; //used before using router /detail/id
  hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void{
      this.route.paramMap
          .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
          .subscribe(hero => this.hero = hero);
    }


    save(): void {
      this.heroService.update(this.hero)
          .then( () => this.goBack());
    }

    goBack(): void {
      this.location.back();
    }
}
