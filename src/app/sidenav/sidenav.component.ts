import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list =[
    {
      number:'1',
      name:'User Management',
      icon:'fa-solid fa-building-user',
    },
    {
      number:'2',
      name:'Organization Management ',
      icon:'fa-solid fa-building-columns',
    },
    {
      number:'3',
      name:'School Management',
      icon:'fa-solid fa-school',
    },
    {
      number:'4',
      name:'Class Management',
      icon:'fa-solid fa-chalkboard-user',
    },
    {
      number:'5',
      name:'Master activity',
      icon:'fa-solid fa-layer-group',
    },
    {
      number:'6',
      name:'Career Plan',
      icon:'fa-solid fa-handshake',
    },
  ];

  constructor() {}
  ngOnInit(): void {

  }

}
