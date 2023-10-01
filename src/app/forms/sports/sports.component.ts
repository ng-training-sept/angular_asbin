import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';
import { SportsStore } from './sports.store';


@Component({
  selector: 'app-sports',
  standalone: true,
  providers: [
    SportsStore
  ],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [ CommonModule, CardComponent,HttpClientModule]
})
export class SportsComponent implements OnInit {

  sport: Card[] = [];
 
// private readonly http = inject(HttpClient);
readonly sportsStore = inject(SportsStore);

  ngOnInit(): void {

    this.sportsStore.fetchSports();
    // setTimeout(() => {
    //   this.sportsStore.saveSport({
    //     id: 'test 3',
    //     name: 'Test 3',
    //     description: 'test 3',
    //     price: 603.55,
    //     imageUrl: ''
    //   });
    // }, 5000)

    // this.http
    //   .get<Card[]>(`${environment.baseUrl}/sports`)
    //   .subscribe(sports => this.sportCards = sports);
      // this.sport = [
      //     {
      //         id: '1',
      //         name: 'Football',
      //         price: 1500,
      //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
      //         description: 'Football description'
      //     },
      //     {
      //         id: '2',
      //         name: 'Football Boot',
      //         price: 6000,
      //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
      //         description: 'Football description'
      //     }
      // ];
   }
}
