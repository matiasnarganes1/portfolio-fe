import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})

export class ProjectsComponent {
  faExternalLinkAlt = faExternalLinkAlt;
  
  projects = [
    {
      image: 'assets/images/proyecto.webp',
      title: 'Project 1',
      description: 'Descripción del proyecto 1.',
      link: 'https://www.example.com/project1'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Project 2',
      description: 'Descripción del proyecto 2.',
      link: 'https://www.example.com/project2'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Project 3',
      description: 'Descripción del proyecto 3.',
      link: 'https://www.example.com/project3'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Project 4',
      description: 'Descripción del proyecto 3.',
      link: 'https://www.example.com/project3'
    },
    {
      image: 'assets/images/proyecto.webp',
      title: 'Project 5',
      description: 'Descripción del proyecto 3.',
      link: 'https://www.example.com/project3'
    }
  ];
}
