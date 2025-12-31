import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
isVisible = false;
bgImage = `url(${document.baseURI}aboutbg.png)`;
 constructor(private el: ElementRef){console.log(document.baseURI)}

 ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.el.nativeElement);
  }
}
