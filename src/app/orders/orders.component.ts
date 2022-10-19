import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Banner } from '../model/banner';
import { Order, Product } from '../model/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private api :  ApiServiceService,
    private route: ActivatedRoute,
    private router: Router,) { }
  productId:any;
  categoryId:any;

  productList!: Array<Product>;
  public bannerList!: Array<Banner>;

   productsDetails!:  Array<Product>;
  productss = Array<Product>;



  filterCategory!: Array<Product>;
  searchKey:string ="";
  bannerUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/banner/";
  subrUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/subcategory/";
  imageUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/product/";

  products: Product | undefined;
  order= new Order();


  ngOnInit(): void {
  this.route.queryParams
    .subscribe((params) => {

      // Defaults to 0 if no query param provided.
      // console.log(params.get('id'));
      this.productId = params['id'];
      this.categoryId =params['cate'];

    });

    console.log(`Product id ${this.productId}`)
    console.log(`Product cate${this.categoryId}`)

    this.api.getProduct()
    .subscribe(res=>{
      this.filterCategory= res;
      this.productList = this.filterCategory.filter(element => element.subcategory_id== this.categoryId);

      this.productsDetails =this.filterCategory.filter(element => element.id== this.productId);
      // es.find((x: { id: any; }) => x.id == this.productId);

      console.log(`Product details list ${this.productList}`)
      console.log(`Product details ${this.productsDetails}`)
      this.productsDetails.forEach((l)=>{
        console.log(`Product details ${l.name}`)
      });
      // this.productList.forEa:ch((a) => {

      //   console.log("Products");
      //   console.log(a.name);

      // });

      // console.log(this.productList)
    });

    // this.api.getProduct()
    // .subscribe(res=>{



    //   console.log(this.productList)
    // });
  }

  moveProductDetails(dd:string,cate:string){
    window.location.reload();
    this.router.navigate(['/productDetails'], { queryParams: { id: dd,cate:cate } });

  }

  submitOrder(id:any,name:any,price:any){
    const money = new Intl.NumberFormat('sw-TZ',
  { style:'currency', currency: 'TZS' });
    console.log("get order");
    this.order.product_id =id;
    this.order.productname =name;
    this.order.totalprice =money.format(parseInt(price));


    // window.location.reload();
    console.log(this.order);
    this.api.getPostOrder(this.order).subscribe(res=>{
        console.log(res);
        this.router.navigate(['/products'], );
    });
    ;


  }

}
