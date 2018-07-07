import {Injectable} from '@angular/core';

import {EventEmitter} from '@angular/core';
@Injectable()



export class ImageService
{




visible_images = [];

getimages (  )
{
/*
   if(types  === 'vibes'){return this.visible_images = images.slice(0, 4);}
  if(types  === 'mood'){return this.visible_images = images.slice(4, 8);}
*/

  return this.visible_images = images.slice(0);
}
}

const images = [
  {"id": 1, 'category':'mood', "url":"assets/mood/1.jpg " },
  {"id": 2, 'category':'mood', "url":"assets/mood/2.jpg " },
  {"id": 3, 'category':'mood', "url":"assets/mood/3.jpg " },
  {"id": 4, 'category':'mood', "url":"assets/mood/4.jpg " },

  {"id": 5, 'category':'vibes', 'url':'assets/vibes/1.jpg' },
  {"id": 6, 'category':'vibes', 'url':'assets/vibes/2.jpg' },
  {"id": 7, 'category':'vibes', 'url':'assets/vibes/3.jpg' },
  {"id": 8, 'category':'vibes', 'url':'assets/vibes/4.jpg' }
];
