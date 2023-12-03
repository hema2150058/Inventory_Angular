import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-productinfo',
  templateUrl: './pop-up-productinfo.component.html',
  styleUrls: ['./pop-up-productinfo.component.css']
})
export class PopUpProductinfoComponent implements OnInit {

  firstName;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private dialogRef :MatDialog) {
    this.firstName = data.name;
   }

  ngOnInit(): void {
  }

  closepop(){
    location.reload();
    this.dialogRef.closeAll();
  }
}
