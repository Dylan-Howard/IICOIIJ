import { Question } from './question';
import { Game } from './game';

export const GAMES: Game[] = [
	{
    id: 0,
    score: 100,
    qCurrent: 2,
    qTotal: 4,
    questions: [
    	{
    		id: 0,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 1,
        img: 'test1.jpg',
        answer: 0
      },
      {
    		id: 2,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 3,
        img: 'test1.jpg',
        answer: 1
      }
    ]
  },
  {
    id: 1,
    score: 200,
    qCurrent: 4,
    qTotal: 4,
    questions: [
    	{
    		id: 0,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 1,
        img: 'test1.jpg',
        answer: 0
      },
      {
    		id: 2,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 3,
        img: 'test1.jpg',
        answer: 1
      }
    ]
  },
  {
    id: 2,
    score: 200,
    qCurrent: 3,
    qTotal: 4,
    questions: [
    	{
    		id: 0,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 1,
        img: 'test1.jpg',
        answer: 0
      },
      {
    		id: 2,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 3,
        img: 'test1.jpg',
        answer: 1
      }
    ]
  },
  {
    id: 3,
    score: 0,
    qCurrent: 0,
    qTotal: 4,
    questions: [
    	{
    		id: 0,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 1,
        img: 'test1.jpg',
        answer: 0
      },
      {
    		id: 2,
        img: 'test.jpg',
        answer: 0
      },
      {
    		id: 3,
        img: 'test1.jpg',
        answer: 1
      }
    ]
  }
]
