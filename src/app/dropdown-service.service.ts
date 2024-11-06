import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownServiceService {
  constructor() {}
  private Items = [
    { id: 1, name: 'Luffy', desc: 'King of Pirates' },
    { id: 2, name: 'Thanos', desc: 'Inevitable' },
    { id: 3, name: 'Superman', desc: 'Hero of Metropolis' },
    { id: 4, name: 'Chocolate', desc: 'Sweet treat' },
    { id: 5, name: 'Biscuit', desc: 'Snack item' },
  ];

  getList(): Observable<any[]> {
    return of(this.Items);
  }
}
