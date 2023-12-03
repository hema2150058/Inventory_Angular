import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutData = `
  <div class="container-fluid g-0">
      <main>
        <div class="display-area" [ngClass]="{'display-area-shrink': sideNavStatus}">
          <p class="hide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque veritatis dicta, deleniti
            facere fuga cumque, recusandae beatae sapiente dolorum possimus iure accusamus perferendis doloribus, saepe at
            nostrum. Modi, harum!
          </p>
          <div class="container" >
              <div class="container">
                  <div class="row">
                  <div class="col">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.QMjp_stAcwMVqv2t3NdSsAHaEK&pid=Api&P=0&h=180" class="rounded" width="100%" height="90%" alt="inventory" ></div>
                  
  
                  <div class="col-6">
                  <p style="text-align: justify;">Inventory management helps companies identify which and how much stock to order at what time. It tracks inventory from purchase to the sale of goods. The practice identifies and responds to trends to ensure there always enough stock to fulfill customer orders and proper warning of a shortage.
  
                      Once sold, inventory becomes revenue. Before it sells, inventory (although reported as an asset on the balance sheet) ties up cash. Therefore, too much stock costs money and reduces cash flow.
                      
                      One measurement of good inventory management is inventory turnover. An accounting measurement, inventory turnover reflects how often stock is sold in a period. A business does not want more stock than sales. Poor inventory turnover can lead to deadstock, or unsold stock.</p>
                
                  </div>
                  <div class="col"></div>
                  </div>
                  </div>
                <h4>How does inventory management work?</h4>
                <p>
                  The basic steps of inventory management include:
                  <p>1.Purchasing inventory: Ready-to-sell goods are purchased and delivered to the warehouse or directly to the point of sale.
                  </p>
                  <p>2.Storing inventory: Inventory is stored until needed. Goods or materials are transferred across your fulfillment network until ready for shipment.
                  </p>
                  <p>Profiting from inventory: The amount of product for sale is controlled. Finished goods are pulled to fulfill orders. Products are shipped to customers.</p>
                  <div class="text-center">
                      
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkivtR66KWIXzw0kf8d0wBnqydDFWgCGnAoA&usqp=CAU" class="rounded" width="40%" height="35%" alt="work flow" >
  
                    </div>
  
          </div>
    
        </div>
      </main>
    </div>
    `;

  title= 'HeaderSideNav';
  sideNavStatus : boolean = false;
  constructor(private appservice : AppServiceService) { }

  ngOnInit(): void {
  }
  updateAboutData(){
    console.log(this.aboutData);
    this.appservice.updateAboutData(this.aboutData);
  }
}
