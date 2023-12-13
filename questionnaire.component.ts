
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireData = [
    {
      question: '1.Correctly answer at least a few questions you will do in this session',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question1'
    },
    {
      question: '2. Correctly answer at least half of all the questions you will do in this session',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question2'
    },
    {
      question: '3. Correctly answer most of the questions you will do in this session',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question3'
    },
    {
      question: '4. Correctly answer all the questions you will do in this session',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question4'
    }
  ];
  
 //to make the rating boxes clickable
  selectedRating: number | null = null;

  selectRating(rating: number): void {
    if (this.selectedRating === rating) {
      this.selectedRating = null;
    } else {
      this.selectedRating = rating;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
