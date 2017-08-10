import { Injectable } from '@angular/core';

import {Hero} from '../DataModel/hero';
import {HEROES} from '../Data/mock-heroes';

@Injectable()
export class HeroService {
    
    getHeroes(): Promise< Hero[]> {
        return Promise.resolve(HEROES);
    }


    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise(resolve => {
            // simulate server lag of 2 seconds
            setTimeout(() => resolve(this.getHeroes())  
            , 2000);
        });
    }


    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
                        .then(heroes => heroes.find(hero => hero.id === id));
    }
}