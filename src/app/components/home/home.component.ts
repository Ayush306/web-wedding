import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SoulVideoComponent } from './soul-video-component/soul-video/soul-video.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    SoulVideoComponent,
    DialogModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit,OnInit{
  responsiveOptions: any[] | undefined;
  products:any;
  visible: boolean = false;
  contactContainer:string = "contact-us-container"
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = 'bottomright';
  // position: string='';
   
  constructor(){

    this.products =
      [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'wed-img-1.jpg',
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
                image: 'wed-img-2.jpg',
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
                image: 'wed-img-11.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
              id: '1002',
              code: 'zz21cz3c1',
              name: 'Blue Band',
              description: 'Product Description',
              image: 'wed-img-12.jpg',
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

showDialog(position: any) {
  this.position = position;
  this.visible = true;
  console.log(this.visible);
  
}

}
