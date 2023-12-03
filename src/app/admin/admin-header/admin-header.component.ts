import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUsComponent } from 'src/app/about-us/about-us.component';
import { AppServiceService } from 'src/app/app-service.service';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit,AfterViewInit {
  @ViewChild(AboutUsComponent) aboutComponent!: AboutUsComponent;
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  constructor( private authService : AuthServiceService,private appservice: AppServiceService, private _router : Router) { }
  ngAfterViewInit() {
    this.appservice.updateAboutData(this.aboutComponent.aboutData);
  }

  ngOnInit(): void {
  }

  sideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

 
  logout() {
    this.authService.logout();
    this._router.navigate(['./loginsuccess']);

  }

  showAbout(){
    console.log("clicked")
    console.log(this.aboutComponent.aboutData);
    this.appservice.triggerAboutUpdate();
  }

  
}
