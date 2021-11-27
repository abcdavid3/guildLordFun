import { Injectable } from '@angular/core';
import { Lordtype } from './lordtype';
import { LORDS } from './mock-lords';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LordService {

  constructor() { }

  getLords(): Observable<Lordtype[]> {
    const lords = of(LORDS);
    return lords;
  }

  getLord(id: number): Observable<Lordtype> {
    const lord = LORDS.find(l => l.id === id)!;
    return of(lord);
  }

}
