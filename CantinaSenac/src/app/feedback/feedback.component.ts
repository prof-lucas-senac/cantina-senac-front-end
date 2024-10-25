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
      nomeUsuario: "Aluno 1",
      escopo: "Ele é um aluno ruim",
      numComentario: 2
    },
    {
      nomeUsuario: "Aluno 2",
      escopo: "Ele é um aluno bom",
      numComentario: 10
    },
    {
      nomeUsuario: "Aluno 3",
      escopo: "Ele é um aluno padrão",
      numComentario: 0
    },
    {
      nomeUsuario: "Aluno Arthur",
      escopo: "Ele é um aluno ",
      numComentario: 12
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
