import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  @Input() items: { image: string; title: string; description: string; link: string }[] = [];

  currentIndex = 0;
  translateX = 0;
  transition = 'transform 0.5s ease';

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.items.length - 1;
    }
    this.updateTranslateX();
  }

  nextSlide() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -this.currentIndex * 100;
  }
}