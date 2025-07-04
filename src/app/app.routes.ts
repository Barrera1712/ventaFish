import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component:About},
    {path: 'contact', component: Contact},
    {path: 'products',component:Products},
    {path: 'carrito',component: Cart},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
