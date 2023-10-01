import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export type SportsState = {
  sports: Card[];
}

@Injectable({
    providedIn:'root'
  })
export class SportsStore {

  private readonly http = inject(HttpClient);

  private state: WritableSignal<SportsState> = signal<SportsState>({
    sports: []
  });

  sports: Signal<Card[]> = computed(() => this.state().sports);

  fetchSports(): void {
    this.http.get<Card[]>('http://localhost:3000/sports').
    subscribe(response => {
      this.state.set({ sports: response });
    });
  }

  saveSport(sport: Card): void {
    this.http.post<Card>('http://localhost:3000/sports', sport).subscribe(res => {
      this.state.mutate(state => state.sports.push(res));
    });
  }

  updateSport(id:string,sport: Card): void {
    this.http.put<Card>(`http://localhost:3000/sports/${id}`, sport).subscribe(
      () => {
        console.log('successful');
      },
      (error) => {
        console.error('Error updating sport:', error);
        // Handle error here, if needed
      }
    );
  }
}