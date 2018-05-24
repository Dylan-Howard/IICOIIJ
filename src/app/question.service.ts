import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question } from './question';
import { QUESTIONS } from './question-list';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Observable<Question[]> {
    return of(QUESTIONS);
  }

  getQuestion(id: number): Observable<Question> {
    return of(QUESTIONS.find(question => question.id === id));
  }
}
