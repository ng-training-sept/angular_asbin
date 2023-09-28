import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card.model';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-item',
  standalone: true,
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CardItemComponent implements OnInit {

  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
  }
}
