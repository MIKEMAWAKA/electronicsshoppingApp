import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Banner } from '../model/banner';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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
      //   // if(a.category ==="women's clothing" || a.category ==="men's clothing"){
      //   //   a.category ="fashion"
      //   // }
      //   // Object.assign(a,{quantity:1,total:a.price});
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

  moveOrder(dd:any,cate:any){
    // window.location.reload();
    this.router.navigate(['/orders'], { queryParams: { id: dd,cate:cate } });

  }

}
