import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRendeComponent } from './components/if-rende/if-rende.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DataComponent } from './components/parent/data/data.component';
import { PipesClassComponent } from './components/pipes-class/pipes-class.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { CursosModule } from './cursos/cursos.module';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DataComponent,
    DirectivesComponent,
    IfRendeComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesClassComponent,
    TwoWayBindingComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
