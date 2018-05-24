import { Question } from './question';

export class Game {
  id: number;           // Id of game;
  score: number;        // Current Score
  qCurrent: number;     // Index of current question
  qTotal: number;       // Total number of questions
  questions: Question[];// Array of questions.
}
