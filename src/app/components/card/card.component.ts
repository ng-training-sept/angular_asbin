import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './card.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class CardComponent {
  private readonly router=inject(Router);
  private readonly route=inject(ActivatedRoute);
  @Input() cards: Card[]= [];
  goToItemDetails(data: Card):void{
    this.router.navigate(['card-item',data.id],{state:{data},relativeTo: this.route}).then();
  }
}