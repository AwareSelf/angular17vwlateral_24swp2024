import { Routes } from '@angular/router';
import { RegisterbookComponent } from './registerbook/registerbook.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/registerbook',
        pathMatch:'full'

     },
    {
       path:'registerbook',
       component:RegisterbookComponent
    },
    {
       path:'listbooks',
       component:ListbooksComponent
    },
    {
        path:'searchbook/:id',
        component:SearchbookComponent
    },
    
    {
        path:'**',
        component:NotfoundComponent
    }
];
