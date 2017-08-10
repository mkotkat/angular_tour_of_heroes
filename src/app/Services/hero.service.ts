import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from '../DataModel/hero';
// import {HEROES} from '../Data/mock-heroes';

@Injectable()
export class HeroService {
    
    // getHeroes(): Promise< Hero[]> {
    //     return Promise.resolve(HEROES);
    // }


    // getHeroesSlowly(): Promise<Hero[]>{
    //     return new Promise(resolve => {
    //         // simulate server lag of 2 seconds
    //         setTimeout(() => resolve(this.getHeroes())  
    //         , 2000);
    //     });
    // }


    // getHero(id: number): Promise<Hero>{
    //     return this.getHeroes()
    //                     .then(heroes => heroes.find(hero => hero.id === id));
    // }




    private heroesUrl = 'api/heroes';

    constructor ( private http: Http) {}

    getHeroes(): Promise< Hero[]>{
        return  this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response => response.json().data as Hero[] )
                    .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Hero)
                    .catch(this.handleError);
    }



    private header = new Headers({'content-type': 'application/json'});

    update(hero: Hero): Promise<Hero> {
            const url = `${this.heroesUrl}/${hero.id}`;
            return this.http
                        .put(url, JSON.stringify(hero), {headers: this.header})
                        .toPromise()
                        .then(()=> hero)
                        .catch(this.handleError);
    }


    create(name: string): Promise<Hero>{
        return this.http
                    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.header})
                    .toPromise()
                    .then(res => res.json().data as Hero)
                    .catch(this.handleError);
    }


    delete(id: number): Promise<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.header})
                        .toPromise()
                        .then( () => null)
                        .catch(this.handleError);
    }


    private handleError(error: any): Promise<any>{
        console.error('An Error occured', error); // for demo purposes only
        return Promise.reject(error.message || error);
    } 


}