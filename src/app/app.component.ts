import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
