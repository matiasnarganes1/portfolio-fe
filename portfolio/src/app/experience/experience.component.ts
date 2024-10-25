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
      image: 'assets/images/proyecto.webp',
      title: 'Experience 1',
      description: 'Descripción del Experience 1.',
      link: 'https://www.example.com/project1'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Experience 2',
      description: 'Descripción del Experience 2.',
      link: 'https://www.example.com/project2'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Experience 3',
      description: 'Descripción del Experience 3.',
      link: 'https://www.example.com/project3'
    }
  ];
}
