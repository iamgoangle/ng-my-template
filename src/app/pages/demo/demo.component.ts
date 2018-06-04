import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public title = 'Kaldisbursement';

  public model = {
    left: true,
    middle: false,
    right: false
  };

  public assets = {
    logo: {
      src: 'assets/images/logo.png'
    }
  };

  constructor() {}

  public ngOnInit() {}
}
