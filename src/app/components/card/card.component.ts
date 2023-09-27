import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatCardModule , FormsModule, ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
isButtonDisabled: boolean = false;


toggleButton(){
  this.isButtonDisabled=!this.isButtonDisabled;
}

title='Welcome page';
firstname='Ramnath';
lastname ='dhakal';
number=98536228101;
titles='Bindng two way';
names: string[] = ['hari', 'shyam', 'om', 'puri', 'ganesh'];

isLikeDisabled: boolean = false;
isShareDisabled: boolean = true;

style: string = 'font-size: 1.2rem; color: cornflowerblue;';
onLike(): void {
  alert('You liked this page!')
}
likeCount: number=0;

incrementLikes(){
  this.likeCount++;
} 

case:boolean=true;

}

