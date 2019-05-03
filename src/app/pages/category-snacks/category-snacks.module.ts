import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategorySnacksPage } from './category-snacks.page';
import { ProductModalPage } from '../product-modal/product-modal.page';
import { ProductModalPageModule } from '../product-modal/product-modal.module';

const routes: Routes = [
  {
    path: '',
    component: CategorySnacksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductModalPageModule,
    RouterModule.forChild(routes)
    
  ],
  declarations: [CategorySnacksPage], entryComponents:[ProductModalPage]
})
export class CategorySnacksPageModule {}
