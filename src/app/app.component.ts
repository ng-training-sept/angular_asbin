import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
// import { NewcardComponent } from './components/newcard/newcard.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import { RouterOutlet ,RouterModule} from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';
import { HttpClient,HttpClientModule,HttpHandler } from '@angular/common/http';
import { SportsStore } from './forms/sports/sports.store';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
     HeaderComponent,RouterOutlet,CardComponent,SportsComponent,AppComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
  //  title = 'ng';

  // cardsTitle: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];
  // fromParent = 'Hello from you parent,  son.';
  // parentOutputMessage:string | undefined;

  // handleCustomEvent(message:string){
  //   this.parentOutputMessage=message;
  // }


    cards:{title:string; content:string}[] =[
      {title:'card 1', content:'this is card 1'},
      {title:'card 2', content:'this is card 2'},
      {title:'card 3', content:'this is card 3'},
      {title:'card 4', content:'this is card 4'},
    ];
    

  //   deleteCard(index: number){
  //     this.cards.splice(index,1);
  //   }
  }

  // addCard(title: string) {
  //   this.cardsTitle.push(title);
  // }

