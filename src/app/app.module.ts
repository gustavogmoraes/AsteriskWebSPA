import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormGravacaoComponent } from './form-gravacao/form-gravacao.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from  '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DatatableComponent } from './form-gravacao/datatable/datatable.component';
import { DevExtremeModule, DxButtonModule} from 'devextreme-angular';
import { MAT_DATE_LOCALE } from '@angular/material';


const appRoutes: Routes = [
  { path:'form-gravacao', component: FormGravacaoComponent},
  { path: 'dash', component: DashComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    FormGravacaoComponent,
    DashComponent,
    DatatableComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    DxButtonModule,
    DevExtremeModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
