import { Injectable } from "@angular/core";
import { GalleryModel } from "../model/gallery.model";

@Injectable({
    providedIn:'root'
})
 export class GalleryService{
    constructor(){

    }
    private storyGalleries:any = [
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b1.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b2.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b3.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b4.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b5.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b6.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b7.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b8.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b9.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha & Shubham', path: 'prateeksha/b10.jpg', folderName: 'prateeksha' },

        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a1.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a2.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a3.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a4.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a5.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a6.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a7.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/a8.jpg', folderName: 'prateeksha' },
      
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c1.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c2.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c3.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c4.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c5.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c6.jpg', folderName: 'prateeksha' },
        { id: 'prateeksha', name: 'Prateeksha', path: 'prateeksha/c7.jpg', folderName: 'prateeksha' },
    ]
    getStoryGalleries(): any[] {
        return this.storyGalleries;
      }
      getStoryGalleryById(id: string) :GalleryModel[]{
        return this.storyGalleries.filter((gallery:any) => gallery.id === id);
      }
}