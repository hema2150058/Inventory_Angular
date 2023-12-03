import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user-model';
import { Inventory, Order } from './admin-usage';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  
  private aboutData = new BehaviorSubject<string>('');
  currentAboutData = this.aboutData.asObservable();
  constructor(private httpClient : HttpClient) { }

  
  getUsers():Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/getUsers`);

  }

  getAllUsers():Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8001/getAllUsers`);
  }

  upgradeUser(username : string):Observable<any>{
    console.log(username);
    return this.httpClient.put<any>(`http://localhost:8001/upgradeUser/${username}`,username);

  }
   
  getAllPendingOrders():Observable<any>{
    console.log("pending orders");
    return this.httpClient.get<any>(`http://localhost:8081/order/getAllPendingOrders`);
  }

  changeOrderStatus(selectedOrderId : string):Observable<Order[]>{
    console.log('accept');
    return this.httpClient.patch<any>(`http://localhost:8081/order/status/${localStorage.getItem('SelectedOrderId')}`,selectedOrderId);
    
  }

  getAllOrders():Observable<any>{
    console.log("all orders");
    return this.httpClient.get<any>(`http://localhost:8081/order/getAllOrders`);

  }
  getAllProductsForUser():Observable<any>{
    console.log("user products");
    return this.httpClient.get<any>(`http://localhost:8082/inventory/getAll`);
  }

  saveInventoryByAdmin(inventory : Inventory):Observable<any>{
    console.log(inventory);
    return this.httpClient.post<any>(`http://localhost:8082/inventory/save`,inventory);
  }

  deleteInventoryByMId(materialId : number):Observable<any>{
    console.log('delete');
    return this.httpClient.delete<any>(`http://localhost:8082/inventory/delete/${materialId}`);
  }

  editInventoryByMId(materialId : number,quantity : number):Observable<any>{
    console.log('editing inventory');
    return this.httpClient.patch<any>(`http://localhost:8082/inventory/editInventory/${materialId}/${quantity}`,materialId);
  }

  deleteOrderByOId(orderId : number):Observable<any>{
    console.log('delete');
    return this.httpClient.delete<any>(`http://localhost:8081/order/delete/${orderId}`);
  }

  placeTheOrder(order : any):Observable<any>{
    console.log(order);
    return this.httpClient.post<any>(`http://localhost:8081/order/placeOrder`,order);
  }

  getOrderByUserNameForUser():Observable<any>{
    console.log("getting orders of the user");
    return this.httpClient.get<any>(`http://localhost:8081/order/getOrdersByUserName/${localStorage.getItem('userData')}`);

  }

 

  updateAboutData(data: string){
    this.aboutData.next(data);
  }
  triggerAboutUpdate(){}
}
