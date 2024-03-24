import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class Index2Component implements OnInit {
constructor(private http:TodoService){
this.data = [];
}
data:Todo[] ;
  ngOnInit(): void {
    this.http.getAll().subscribe(
      {
        next : (data) => {
          this.data = data;
          console.log(this.data);
        },
        error : () => {},
        complete : ()=> {}
      }
    )
  }
}
