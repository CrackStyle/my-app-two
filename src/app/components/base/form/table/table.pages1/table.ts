import { Component, OnInit, Input } from '@angular/core';
import { Ipublikation } from 'src/app/components/models/publikation';
import { Router } from '@angular/router';
import { ServicePost } from 'src/app/services/post.servise';


@Component({
  selector: 'app-table-pages1',
  templateUrl: './table.html',
  styleUrls: ['./table.scss']
})
export class TablePages1Component implements OnInit  {
@Input() post: Ipublikation

  p: number = 1;

  constructor(
    private servicepost: ServicePost,
    private router: Router){ }
  
  ngOnInit(): void {  }

  public async openPost(post: Ipublikation){
    const postId = post ? post.id : null
    await this.router.navigate(['postitems', {id: postId}]);
    this.servicepost.setItemPost(post);
  }

  searchText = '';

  

}
