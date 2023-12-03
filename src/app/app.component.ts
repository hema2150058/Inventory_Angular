import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nginventory';
  error: string | null = null;
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {


    this.authService.timeout.subscribe((isTimeOut) => {

      if (isTimeOut)
        this.error = 'Your session is expired. Please Login again!';
    });
    this.authService.autoLogin();
  }

  handleError() {
    this.error = null;
  }
}
