import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from './service/gallery.service';
import { GalleryModel } from './model/gallery.model';

@Component({
  selector: 'app-storygallary',
  standalone: true,
  imports: [],
  templateUrl: './storygallary.component.html',
  styleUrl: './storygallary.component.scss'
})
export class StorygallaryComponent {
  paraId:string = '';
  personName:string='';
  galleryImages:GalleryModel[] | undefined;
  constructor(private routes:ActivatedRoute,private galleryService:GalleryService){

    routes.params.subscribe(parm=>{
      console.log("this ",parm);
      this.paraId = parm?parm.toString():'';
      
    })
     this.getImageById('prateeksha');
  }
  getImageById(id:string){
   this.galleryImages = this.galleryService.getStoryGalleryById(id);
   this.personName = this.galleryImages[0]?this.galleryImages[0].name:'Wedding Story';
   console.log(this.galleryImages);
   
  }
}
