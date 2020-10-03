import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      name: 'Blogs',
      path: '/menu/blogs'
    },
    {
      name: 'Forum',
      path: '/menu/forum'
    },
    {
      name: 'Home',
      path: '/menu/home'
    }
  ]
 selectedPath='';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if(event && event.url)
      this.selectedPath = event.url
    })
  }

  ngOnInit() {
  }
}
