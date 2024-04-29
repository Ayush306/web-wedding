import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
    loadComponent:()=>import('./components/home/home.component').then(t=>t.HomeComponent)
    },
    {
        path:'wedding-stories',
        loadComponent:()=>import('./components/wedding-story/wedding-story.component').then(m=>m.WeddingStoryComponent)
    },
    {
        path:'wedding-stories/:id',
        loadComponent:()=>import('./components/storygallary/storygallary.component').then(m=>m.StorygallaryComponent)
    }
];
