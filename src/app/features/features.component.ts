import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features = [
    {
      title: 'Massive Options',
      text: `Take full control of your layouts with the new hierarchical options system that leaves nothing behind. 
      Just imagine and create with Uncode.`
    },
    {
      title: 'Advanced Grid System',
      text: `Uncode Theme is ultra professional, smooth and sleek, 
      with a clean modern layout, for almost any possible and impossible layouts.`
    },
    {
      title: 'Adaptive Images',
      text: `Take full control of your layouts with the new hierarchical options system that leaves nothing behind. 
      Just imagine and create with Uncode.`
    },
    {
      title: 'Tailored Visual Composer',
      text: `Adaptive Images detects your visitor’s screens size and automatically creates and delivers appropriate re-scaled version.`
    },
    {
      title: 'Pixel Perfect',
      text: `Uncode Creative Theme runs a tailored version of Visual Composer with extra advanced functionalities & organised clean skin.`
    },
    {
      title: 'Content Block',
      text: `Take full control of your layouts with the new hierarchical options system that leaves nothing behind. 
      Just imagine and create with Uncode.`
    },
    {
      title: 'Powered Media Library',
      text: `With Uncode's enhanced version the Media Library will basically swallow any kind of media you are adding to your WordPress`
    },
    {
      title: 'Unpaired Flexibility',
      text: `With over 30+ Concepts ready to go and combine, building a layout has never been easier. 
      Anything you can think of can be built..`
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
