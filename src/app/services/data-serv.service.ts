import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServService {
  
  constructor() { }

  getItemsFromLocalStorage(): any {
    const items = localStorage.getItem('user');
    return items ? JSON.parse(items) : null;
  }
}
