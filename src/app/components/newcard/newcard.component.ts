import { Component , EventEmitter, Input ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatAnchor, MatButton, MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Pipe, PipeTransform, } from '@angular/core';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';




@Component({
  selector: 'app-newcard',
  standalone: true,
  imports: [CommonModule,FormsModule ,MatCardModule,MatButtonModule,MatInputModule,ReversePipe],
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.scss']
})
export class NewcardComponent {
username : string= '';

resetInputField(){
  this.username='';
}

users=[
  {id:1, name:'radheyshyam', address:'Pokhara',age:28},
  {id:2, name:'manohar', address:'lalitpur',age:23},
  {id:1, name:'dharohar', address:'kathmandu',age:13},
  {id:1, name:'danab', address:'bhaktapur',age:18}
];

filter:any[]=[];

  constructor(){

    this.filter=this.users.filter(user=>user.age>20);
}

filter20(): any[]{
  return this.users.filter(user=> user.age>20);
}
@Input() titles: string[] = [];
//  @Input({required: true}) titles: string[] = [];
@Input() message:string | undefined;
@Input() cardTitle:string | undefined;
@Input() cardContent:string | undefined;
@Output() delete = new EventEmitter<void>();

deleteCard(){
  this.delete.emit();
}




@Output() customEvent = new EventEmitter<string>();
outputMessage:string | undefined;

emitEvent(){
  this.outputMessage='Event emitted from child';
  this.customEvent.emit(this.outputMessage);
}

@Output() titleEvent$ = new EventEmitter<string>();

onAddCard(title: string): void {
  this.titleEvent$.emit(title);
}

title:string='subedi asbin';
}
