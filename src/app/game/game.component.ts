import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { Game } from '../game';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  // question: Question = {
  //   img: 'test.jpg',
  //   answer: 0
  // };

  constructor(private questionService: QuestionService) { }

  question: Question;

  game: Game = {
    score: 0,
    qCurrent: 0,
    qTotal: 10,
    questions: this.getQuestions()
  };

  ngOnInit() {
    this.getQuestion(0);



    $("#responseCat").click(function() { $('#q-correct').toggleClass("show") });
    $("#responseJac").click(function() { $('#q-incorrect').toggleClass("show") });
  }

  getQuestions(): void {
    this.questionService.getQuestions()
        .subscribe(questions => this.questions = questions);
  }

  getQuestion(id: number): void {
    this.questionService.getQuestion(id)
        .subscribe(question => this.question = question);
  }

}
