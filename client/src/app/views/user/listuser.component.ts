import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  total:number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
