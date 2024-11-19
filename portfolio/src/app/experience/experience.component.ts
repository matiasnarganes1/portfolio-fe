import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.sass'
})
export class ExperienceComponent {
  faExternalLinkAlt = faExternalLinkAlt;
  
  experiences = [
    {
      image: 'assets/images/avenga-logo.png',
      title: 'Avenga (Ex Incluit)',
      description: '(2021 - 2023) - FullStack Developer',
      link: 'https://www.avenga.com/'
    },
    {
      image: 'assets/images/crossbridge-logo.png',
      title: 'Crossbridge',
      description: '(2023) - FullStack Developer',
      link: 'https://gocrossbridge.com/'
    },
    {
      image: 'assets/images/Accenture-Logo.png',
      title: 'Accenture',
      description: '(2023 - present) - FullStack Developer ',
      link: 'https://www.accenture.com/us-en'
    }
  ];
}
