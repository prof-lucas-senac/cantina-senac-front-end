import { Component, OnInit } from '@angular/core';
import { Feedback } from './card-feedback/feedback';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: Feedback[] = [ ];
  apiUrl = "http://localhost:4200/api/feedbacks";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Feedback[]>(this.apiUrl).subscribe((feedbacks) => 
      this.feedbacks = feedbacks
    );
  }

}
