import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Banner } from '../model/banner';
import { Product } from '../model/product';
import { Subcategory } from '../model/subcategory';
import { Category } from '../model/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public productList!: Array<Product>;
  public bannerList!: Array<Banner>;
  public subcateList!: Array<Subcategory>;
  public cateList!: Array<Category>;

  productss = Array<Product>;


  filterCategory!: Array<Product>;
  searchKey:string ="";
  bannerUrl = "http://admin.iphosam.co.tz/public/upload/images/banner/";
  subrUrl = "http://admin.iphosam.co.tz/public/upload/images/subcategory/";
  imageUrl = "http://admin.iphosam.co.tz/public/upload/images/product/";

  products: Product | undefined;
  constructor(private api :  ApiServiceService,
    private route: ActivatedRoute,
    private router: Router

    ) { }


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

    // this.cartService.search.subscribe((val:any)=>{
    //   this.searchKey = val;
    // })
    this.api.getBannner()
    .subscribe(res=>{
      this.bannerList= res;

      this.bannerList.forEach((a) => {

        console.log("Products");

      });


    });

    this.api.getSubCategory()
    .subscribe(res=>{
      this.subcateList= res;
      this.subcateList.forEach((a)=>{
        // console.log(a.name)

      });



    });



  }



  moveProductDetails(id:string,cate:string){
    console.log(id);
    console.log(cate);
    this.router.navigate(['/productDetails'], { queryParams: { id: id,cate:cate } });

  }

}
