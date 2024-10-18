import { Component, OnInit } from '@angular/core';
import { faHome, faUser, faCogs, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})

export class HeaderComponent implements OnInit {
  enFlag: string = '';
  esFlag: string = '';
  ptFlag: string = '';
  faHome = faHome;
  faUser = faUser;
  faCogs = faCogs;
  faBriefcase = faBriefcase;


  constructor() {}

  ngOnInit(): void {
    this.enFlag = '././assets/images/gb.webp';
    this.esFlag = '././assets/images/es.webp';
    this.ptFlag = '././assets/images/br.webp';
  }
}