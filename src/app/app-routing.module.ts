import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ChartComponent } from './charts/chart/chart.component';
import { CustomChartComponent } from './charts/custom-chart/custom-chart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: ToDoComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'customchart', component: CustomChartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
