import { Component, OnInit } from '@angular/core';
import { Feedback } from './card-feedback/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [
    {
      nomeUsuario: "Aluno1",
      escopo: "Feedback 1",
      numComentarios: 2
    },
    {
      nomeUsuario: "Aluno2",
      escopo: "Feedback 2",
      numComentarios: 5
    },
    {
      nomeUsuario: "Aluno3",
      escopo: "Feedback 3",
      numComentarios: 0
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
