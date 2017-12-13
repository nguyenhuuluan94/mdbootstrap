import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  teams = [
    {
      name: 'Bruce Robinson',
      title: 'Senior Web Developer',
      imgUrl: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/01/shutterstock_194761760-uai-258x258.jpg'
    },
    {
      name: 'Sean Collins',
      title: 'Implementation Engineer',
      imgUrl: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/01/shutterstock_229035328-uai-258x258.jpg'
    },
    {
      name: 'Andrew Lewis',
      title: `Sales & Marketing Manager`,
      imgUrl: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/01/shutterstock_209995843-uai-258x258.jpg'
    },
    {
      name: 'Jesse Peterson',
      title: 'Video & Motion Graphic',
      imgUrl: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/01/shutterstock_235866004-uai-258x258.jpg'
    },
    {
      name: 'Chris Walker',
      title: `Web Developer`,
      imgUrl: 'https://undsgn-firmadamianobedu.netdna-ssl.com/uncode/wp-content/uploads/2015/01/shutterstock_225905500-uai-258x258.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
