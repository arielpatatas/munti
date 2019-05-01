import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Api } from 'src/app/entities/api.class';

@Component({
  selector: 'app-category-snacks',
  templateUrl: './category-snacks.page.html',
  styleUrls: ['./category-snacks.page.scss'],
})
export class CategorySnacksPage implements OnInit {

  type_id;
  items: any;

  constructor(public route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.type_id = this.route.snapshot.paramMap.get("id");
    this.http.get(Api.URL +'type?type='+this.type_id).subscribe(data => {
      this.items = data;
    })
  }
}
