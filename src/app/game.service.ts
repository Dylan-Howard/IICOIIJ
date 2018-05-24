import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question } from './question';
import { QUESTIONS } from './question-list';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

  getGame(id: number): Observable<Game> {
    return of(GAMES.find(game => game.id === id));
  }

}
