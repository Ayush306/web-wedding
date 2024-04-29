import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  constructor(private render:Renderer2 , @Inject(DOCUMENT)  private document: Document){

  }
  showNav:boolean = false;
  ngAfterViewInit(){
    this.replayVideo();
    // this.changeTextColor();
  }
  replayVideo(){
    const  homeVideo:HTMLVideoElement  = this.document.getElementById('home-video') as HTMLVideoElement;

    if(homeVideo){

      homeVideo?.addEventListener('ended',()=>{
        homeVideo.play();
        homeVideo.muted;
      })
    }

  }
  changeTextColor(){
    const  video:HTMLVideoElement  = this.document.getElementById('home-video') as HTMLVideoElement;
    video.addEventListener('play', function() {
      setInterval(() => {
        // Sample the color of the video frame at a specific point (e.g., top-left corner)
        const ctx = document.createElement('canvas').getContext('2d');
        const text:NodeListOf<HTMLElement> = document.querySelectorAll('.textColor') as NodeListOf<HTMLElement>;
        if(ctx && text){

          ctx.drawImage(video, 0, 0, 1, 1);
          const pixelData = ctx.getImageData(0, 0, 1, 1).data;
          const [r, g, b] = pixelData;
          
          // Determine the luminance of the background color
          const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          
          // Adjust text color based on luminance
          if (luminance > 0.5) {
            text.forEach((m:HTMLElement)=>m.style.color = 'black') // Dark text for light background
          } else {
            text.forEach((m:HTMLElement)=>m.style.color = 'white') // Light text for dark background
          }
        }
        }, 100); // Adjust every second
      });
  }
  makeStyle(){
    this.showNav = !this.showNav;
    const headerWrraper:HTMLElement = this.document.getElementById('headerId') as HTMLElement;
    if(this.showNav){

      if(headerWrraper){
        headerWrraper.style.height = '100vh';
        headerWrraper.style.backgroundColor = '#fff';
        // const body:HTMLElement = this.document.getElementsByTagName('body')[0] as HTMLElement;
        // body.style.overflow = 'hidden';
      }
    }else{
      headerWrraper.style.height = 'auto';
      headerWrraper.style.backgroundColor = 'transparent';
      // const body:HTMLElement = this.document.getElementsByTagName('body')[0] as HTMLElement;
      // body.style.overflow = 'auto';

    }
  }
}
