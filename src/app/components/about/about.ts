import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initScrollAnimations } from '../../utils/scroll-animate';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit{
 isVisible = false;

 constructor(private el: ElementRef){}

 ngAfterViewInit() {
  initScrollAnimations();
 }
}
