import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login-screen',
    pathMatch: 'full'
  },
  {
    path: 'login-screen',
    loadChildren: () => import('./login-screen/login-screen.module').then( m => m.LoginScreenPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'order-mgmt',
    loadChildren: () => import('./order-mgmt/order-mgmt.module').then( m => m.OrderMgmtPageModule),
  },
  {
    path: 'order-cancelled',
    loadChildren: () => import('./order-cancelled/order-cancelled.module').then( m => m.OrderCancelledPageModule),
  },
  {
    path: 'delivery-boy',
    loadChildren: () => import('./delivery-boy/delivery-boy.module').then( m => m.DeliveryBoyPageModule),
  },
  {
    path: 'offline-orders',
    loadChildren: () => import('./offline-orders/offline-orders.module').then( m => m.OfflineOrdersPageModule),
  },

  {
    path: 'order-items',
    loadChildren: () => import('./order-items/order-items.module').then( m => m.OrderItemsPageModule),
  },
  {
    path: 'new-orders',
    loadChildren: () => import('./new-orders/new-orders.module').then( m => m.NewOrdersPageModule),
  },
  {
    path: 'track-daily-sales',
    loadChildren: () => import('./track-daily-sales/track-daily-sales.module').then( m => m.TrackDailySalesPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
