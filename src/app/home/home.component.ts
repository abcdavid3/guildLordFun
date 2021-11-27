import { Component, OnInit } from '@angular/core';
import { Lordtype } from '../lordtype';
import { LORDS } from '../mock-lords';
import { LordService } from '../lord.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lords: Lordtype[] = [];

  constructor(private lordService: LordService) { }

  ngOnInit(): void {
    this.getLords();
  }

  getLords(): void {
    this.lordService.getLords()
      .subscribe(lords => this.lords = lords)
  }

}
