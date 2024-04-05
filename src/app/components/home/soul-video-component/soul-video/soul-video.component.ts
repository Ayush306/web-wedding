import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-soul-video',
  standalone: true,
  imports: [],
  templateUrl: './soul-video.component.html',
  styleUrl: './soul-video.component.scss'
})
export class SoulVideoComponent {
  constructor(@Inject(DOCUMENT) private document:Document){}

  chatText = this.document.getElementById('soul-text');
  
   text = `Every wedding is unique and so are our films. For past 8 years HOTC has set new benchmarks of 
   <br> of storytelling within wedding realm and beyond. We are fortunate to have experienced so unique cultures and traditions across 25 countries and to document stories that continuously overwhelm us. `;

   ngAfterViewInit(){
    this.chatText?this.chatText.innerHTML+='':'';
    if(this.text){
      // this.typeWriter(this.text);

    }
    setTimeout(()=>{
      const soulText = this.document.getElementById('soul-text');
      if(soulText)
      soulText.style.display = 'block';
    },8000)
   }
 typeWriter(text:string, i = 0) {
  if (i < text.length) {
    this.chatText?this.chatText.innerHTML += text.charAt(i):'';
    i++;
    setTimeout(() => {
      this.typeWriter(text, i);
    }, Math.floor(Math.random() * 150) + 50); // Adjust speed as needed
  }
}

}
