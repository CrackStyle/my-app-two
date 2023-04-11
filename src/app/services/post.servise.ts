import { Injectable } from '@angular/core';
import { Ipublikation } from '../components/models/publikation';

@Injectable({providedIn: 'root'})

export class ServicePost {

  private itemPost: Ipublikation | null = null;

  constructor(){}

  public setItemPost(post: Ipublikation) {
    this.itemPost = post;
  }

  public getItemPost(): Ipublikation | null {
    return this.itemPost;
  }
}