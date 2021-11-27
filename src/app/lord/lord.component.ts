import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lord',
  templateUrl: './lord.component.html',
  styleUrls: ['./lord.component.scss']
})
export class LordComponent implements OnInit {

  constructor() { }

  @Input() lordName: string;
  @Input() lordImgsrc: string;

  ngOnInit(): void {
  }

}
