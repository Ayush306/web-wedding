import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SoulVideoComponent } from './soul-video-component/soul-video/soul-video.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    SoulVideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit,OnInit{
  responsiveOptions: any[] | undefined;
  products:any;
 
  constructor(){

    this.products =
      [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'wed-img-5.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'wed-img-4.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'Product Description',
                image: 'wed-img-3.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            ]
        ;
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      },
  ];
}
  ngOnInit(){
    // console.log("dfgdf",this.products);
    
  }
ngAfterViewInit(){
  
}

}
