import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategorySnacksPage } from './category-snacks.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [CategorySnacksPage]
})
export class CategorySnacksPageModule {}
