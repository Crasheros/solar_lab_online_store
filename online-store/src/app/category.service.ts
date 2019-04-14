import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from "./category";
import {Categories} from "./mock-categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  getCategory(id: number): Observable<Category> {
    return of (Categories.find(category => category.id === id));
  }
}
