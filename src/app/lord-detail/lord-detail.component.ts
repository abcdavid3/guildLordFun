import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LordService } from '../lord.service';
import { Lordtype } from '../lordtype';

@Component({
  selector: 'app-lord-detail',
  templateUrl: './lord-detail.component.html',
  styleUrls: ['./lord-detail.component.scss']
})
export class LordDetailComponent implements OnInit {
  LordName: string;
  LordBio: string;
  LordQuote: string;

  lord: Lordtype;

  constructor(
    private route: ActivatedRoute,
    private lordService: LordService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLord();
  }

  getLord(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lordService.getLord(id)
      .subscribe(lord => this.lord = lord);
  }

}
