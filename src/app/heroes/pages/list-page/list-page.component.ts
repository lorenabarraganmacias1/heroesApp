import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent {

  public heroes:Hero[] = [];

  constructor (private heroesService: HeroesService){}

  ngOnInit(): void{
    this.heroesService.getHerores()
    .subscribe( heroes => this.heroes = heroes);
  }

}
