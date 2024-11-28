import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from './feedback';

@Component({
  selector: 'app-card-feedback',
  templateUrl: './card-feedback.component.html',
  styleUrls: ['./card-feedback.component.css']
})
export class CardFeedbackComponent implements OnInit {

  nomeUsuario = "NomeUsuario";
  escopo = "Este é o feedback back";
  numComentarios = 3;

  @Input() feedback: Feedback = {
    nomeUsuario: "ManoelLucas",
    conteudo: "Feedback do Lucas",
    numComentarios: 0,
    dataPublicacao: "hoje"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
