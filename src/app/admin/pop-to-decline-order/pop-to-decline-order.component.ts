import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-pop-to-decline-order',
  templateUrl: './pop-to-decline-order.component.html',
  styleUrls: ['./pop-to-decline-order.component.css']
})
export class PopToDeclineOrderComponent implements OnInit {

  orderId;
  constructor(public dialogRef : MatDialogRef<PopToDeclineOrderComponent>, @Inject(MAT_DIALOG_DATA) public data : any,private appService:AppServiceService) { 
    this.orderId = data.orderIdPop;
  }

  ngOnInit(): void {
  }
  decline(){
    this.appService.deleteOrderByOId(this.orderId).subscribe(data =>{
      console.log(data);
      this.dialogRef.close();
      })
    }
  
  cancel(){
    this.dialogRef.close();
  }

}
