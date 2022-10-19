import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Banner } from '../model/banner';
import { Product } from '../model/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  public productList!: Array<Product>;
  public bannerList!: Array<Banner>;


  productss = Array<Product>;



  filterCategory!: Array<Product>;
  searchKey:string ="";
  // bannerUrl = "http://admin.iphosam.co.tz/public/upload/images/banner/";
  // subrUrl = "http://admin.iphosam.co.tz/public/upload/images/subcategory/";
  // imageUrl = "http://admin.iphosam.co.tz/public/upload/images/product/";

  bannerUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/banner/";
  subrUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/subcategory/";
  imageUrl = "https://admin.samsunghubtz.co.tz/public/upload/images/product/";

  products: Product | undefined;
  constructor(private api :  ApiServiceService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a) => {

        console.log("Products");
        console.log(a.name);
        // if(a.category ==="women's clothing" || a.category ==="men's clothing"){
        //   a.category ="fashion"
        // }
        // Object.assign(a,{quantity:1,total:a.price});
      });

      console.log(this.productList)
    });

    this.api.search.subscribe((val:any)=>{
      this.searchKey = val;
    })

  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  filterSearch(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  moveProductDetails(id:string,cate:string){
    this.router.navigate(['/productDetails'], { queryParams: { id: id,cate:cate } });

  }

}
