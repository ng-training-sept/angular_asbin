import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements OnInit {

  groceryCards: Card[] = [];
  // private readonly http = inject(HttpClient);

  // ngOnInit(): void {
  //   this.http
  //     .get<Card[]>(`${environment.baseUrl}/grocery`)
  //     .subscribe(grocery => this.groceryCards = grocery);



  ngOnInit(): void {
      this.groceryCards = [
          {
              id: '1',
              name: 'onion',
              price: 1500,
              imageUrl: 'https://media.istockphoto.com/id/513920379/photo/onion-bulbs.jpg?s=1024x1024&w=is&k=20&c=apEnErgXH5LdF1_FSpBqADUeNx_WVgeOHqbUr1Tg0i4=',
              description: 'Football description'
          },
          {
              id: '2',
              name: 'garlic',
              price: 6000,
              imageUrl: 'https://media.istockphoto.com/id/499147864/photo/garlic.jpg?s=1024x1024&w=is&k=20&c=BWVrTvtzh0-x2ycaPhaz8xOiJWsGu7ys0Rbiu7NiL9A=',
              description: 'Football description'
          }
      ];
  }
}

