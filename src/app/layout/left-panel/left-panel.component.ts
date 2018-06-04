import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  public assets = {
    images: {
      logo: 'assets/images/logo.png',
      logo_2: 'assets/images/logo2.png',
      avatar: {
        type_1: 'assets/images/avatar/1.jpg',
        type_2: 'assets/images/avatar/2.jpg',
        type_3: 'assets/images/avatar/3.jpg',
        type_4: 'assets/images/avatar/4.jpg'
      },
      admin: 'assets/images/admin.jpg'
    }
  };

  constructor() {}

  public ngOnInit() {}
}
