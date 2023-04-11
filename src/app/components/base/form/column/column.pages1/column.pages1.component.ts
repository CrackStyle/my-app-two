import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ipublikation } from 'src/app/components/models/publikation';
import { publikations as data } from 'src/app/components/shared/publications';
import { ServicePost } from 'src/app/services/post.servise';

@Component({
  selector: 'app-column-pages1',
  templateUrl: './column.pages1.component.html',
  styleUrls: ['./column.pages1.component.scss']
})
export class ColumnPages1Component {

  publikation: Ipublikation[] = data;
  post: Ipublikation | undefined
  p: number = 1;
    
  constructor(
    private servicepost: ServicePost,
    private router: Router){ }
  
  ngOnInit(): void {}

  public async openPost(post: Ipublikation){
    await this.router.navigate(['postitem']);
    this.servicepost.setItemPost(post);
  }
}
