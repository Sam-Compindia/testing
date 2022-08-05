import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  age: number;
  name: string;

  constructor() { 
    this.age = 20;
    this.name = 'sam';
  }

  ngOnInit(): void {
  }
  
  greet(): void {
      alert("Hello " + this.name + " and age is  " + this.age);

  };

}
