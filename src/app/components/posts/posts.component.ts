import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Virtual } from 'swiper';
import { Ipublikation } from '../models/publikation';
import { SwiperComponent } from 'swiper/angular';
import { Iquestion } from '../models/iquestion';
import { question as data } from '../shared/question';

SwiperCore.use([Navigation, Virtual]);


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostsComponent implements OnInit {
  post: Ipublikation 
  questing: Iquestion[]=data
  @ViewChild('swiper', { static: false }) swiper: SwiperComponent;
  slideNext(){
    this.swiper.swiperRef.slideNext();
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev();
  }

  constructor( ){ }

  ngOnInit(): void { }

  onSlideChange(){ }

}
