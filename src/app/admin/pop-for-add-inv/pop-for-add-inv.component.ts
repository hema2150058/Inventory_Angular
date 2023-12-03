import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inventory } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-pop-for-add-inv',
  templateUrl: './pop-for-add-inv.component.html',
  styleUrls: ['./pop-for-add-inv.component.css']
})
export class PopForAddInvComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<PopForAddInvComponent>,private appService:AppServiceService) { }

  ngOnInit(): void {
  }

  inventoryData: Inventory = new Inventory();

  submitForm() {
    // Call your service to send data to the backend
    this.appService.saveInventoryByAdmin(this.inventoryData).subscribe(response => {
      // Handle the response from the backend if needed
      console.log(response);
      this.dialogRef.close();
    });
  }
  closePopup(){
    this.dialogRef.close();
  }
}
