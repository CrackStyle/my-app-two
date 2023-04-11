import { Component, OnInit, Input } from '@angular/core';
import { ServicePost } from 'src/app/services/post.servise';
import { Ipublikation } from '../../models/publikation';


@Component({
  selector: 'app-post-one',
  templateUrl: './post.one.component.html',
  styleUrls: ['./post.one.component.scss']
})
export class PostOneComponent implements OnInit {

  public posts: Ipublikation | null = null;

  constructor(
    private servicepost: ServicePost
  ){  }
  
  ngOnInit(): void { 
    this.posts = this.servicepost.getItemPost();
  }

}
