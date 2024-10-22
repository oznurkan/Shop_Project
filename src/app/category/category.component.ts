import { Component } from '@angular/core';
import { Category } from './category';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent {
  constructor(
    private alertifyService: AlertifyService,
    private categoryService: CategoryService
  ) {}

  title = 'kategori listesi';
  categories: Category[] = [];

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{this.categories=data});
  }
}
