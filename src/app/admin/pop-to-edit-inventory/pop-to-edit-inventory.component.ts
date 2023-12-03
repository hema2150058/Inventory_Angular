import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inventory } from 'src/app/admin-usage';
import { AppServiceService } from 'src/app/app-service.service';
import { UserPlaceOrderComponent } from 'src/app/user/user-place-order/user-place-order.component';

@Component({
  selector: 'app-pop-to-edit-inventory',
  templateUrl: './pop-to-edit-inventory.component.html',
  styleUrls: ['./pop-to-edit-inventory.component.css']
})
export class PopToEditInventoryComponent implements OnInit {
  materialId;
  materialName;
  inventory = new Inventory();
  quantity: any;

  constructor(private appservice: AppServiceService, public dialogRef: MatDialogRef<UserPlaceOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.materialId = data.materialIdPop;
    this.materialName = data.materialNamePop;
  }

  ngOnInit(): void {
  }
  editInventory() {

    this.appservice.editInventoryByMId(this.materialId,this.quantity).subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    })
  }

  cancel(){
    this.dialogRef.close();
  }
}