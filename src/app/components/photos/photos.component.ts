import { Component, OnInit, Input,  Output, EventEmitter ,  OnChanges} from '@angular/core';
import {ImageService} from '../../shared/image.service';
import {trigger, state, style, transition,
  animate, group, query, stagger, keyframes} from '@angular/animations';
import * as $ from 'jquery';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  animations: [
    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(1500)
      ]),
      transition(':leave', [
        animate(1500, style({transform: 'translateX(100%)',  opacity: 0}))
      ])
    ])

 ]
    /*trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(1000, style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(1000, style({ height: '*' }))
      ])])      */
})
export class PhotosComponent  implements OnInit {
images = [];
  name = '';
  constructor(private imageService: ImageService) {
    this.images = this.imageService.getimages();
  }
 ngOnInit() {

 /*  $(window).ready(function(){

if($('.appear').hasStyle ("appear")){     setTimeout ("$('.appear').fadeIn('slow');",2000);}

   });
*/
}}
