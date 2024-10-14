import { Root } from '../../modules/root';
import { Ipost } from './../../modules/interfaces';
import { Component } from '@angular/core';
import { totalPost } from '../../../../public/tot-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    this.postArr = totalPost.posts;
    // this.postArr.push(response.posts[i]);
    console.log(this.postArr);
  }
}
