# Configure the Routes

Inside app/app.routes.ts
```sh
import { Routes } from '@angular/router';

export const routes: Routes = [

    { 
        path: '', redirectTo: 'auth/login', pathMatch: 'full' 
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },
    {
        path: 'sales',
        loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule)
    },
];
```