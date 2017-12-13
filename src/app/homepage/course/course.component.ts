import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  imgs = [
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Classic-Agency-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/05/demo-content-homepage-Creative-Digital-Agency-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/05/demo-content-homepage-Creative-Corporation-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Blog-Magazine-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Blog-Metro-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Blog-Editorial-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Classic-Start-Up-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Creative-Agency-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Creative-Agency-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Portfolio-Metro-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/10/demo-content-homepage-Creative-Department-Uncode-uai-480x320.jpg'
    },
    {
      url: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2017/04/demo-content-homepage-Classic-Restaurant-Uncode-uai-480x320.jpg'
    },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
