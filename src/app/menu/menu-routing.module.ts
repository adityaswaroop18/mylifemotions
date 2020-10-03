import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'mylifemotions',
    component: MenuPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ] },
        {
          path: 'blogs',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../blogs/blogs.module').then(m => m.BlogsPageModule)
            }
          ]
        },

  {
    path: 'forum',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../forum/forum.module').then(m => m.ForumPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/mylifemotions/home',
    pathMatch: 'full'
  }
]
},
{
path: '',
redirectTo: '/mylifemotions/home',
pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
