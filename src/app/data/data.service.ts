// import { HttpClient } from '@angular/common/http';
// import { Injectable, WritableSignal, inject, signal } from '@angular/core';
// import { environment } from 'src/environment';
// import { Card } from '../components/card/card.model';
// import { SportsComponent } from '../forms/sports/sports.component';



// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   sportCards: Card[] = [];
//    private readonly http = inject(HttpClient);
 

//  fetchData():string{
//   return 'This data should be injected from data service.';
//  }
 
//  GetCustomer(data:any){
//   return 
//    this.http
//       .get<Card[]>(`${environment.baseUrl}/sports`)
//      .subscribe(sports => this.sportCards = sports);
//  }

//  saveCustomer(data:any){
//   return this.http.post(`${environment.baseUrl}/sports`,data).subscribe( Response => {
//     this.state.mutate(state => state.sportCards.push(Response ));
//   });
//  }

// }
