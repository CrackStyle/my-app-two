import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipublikation } from 'src/app/components/models/publikation';
import { publikations as data } from 'src/app/components/shared/publications';
import { ServicePost } from 'src/app/services/post.servise';


@Component({
  selector: 'app-table-post',
  templateUrl: './table.post.component.html',
  styleUrls: ['./table.post.component.scss']
})
export class TablePostComponent implements OnInit {

  publikation: Ipublikation[] = data;
  post: Ipublikation | undefined

  constructor(
    private servicepost: ServicePost,
    private router: Router){ }
  
  ngOnInit(): void {}

  public async openPost(post: Ipublikation){
    const postId = post ? post.id : null
    await this.router.navigate(['postitem', {id: postId}]);
    this.servicepost.setItemPost(post);
  }
}
