import { Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Card } from '../card/card.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SportsStore } from 'src/app/forms/sports/sports.store';
// import { DataService } from 'src/app/data/data.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [ CommonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,HttpClientModule],

  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss'],
  providers: [SportsStore]
})
export class ItemSaveUpdateComponent implements OnInit {

  itemForm!: FormGroup;

  private readonly dialogRef = inject(MatDialogRef);
  readonly dialogData = inject(MAT_DIALOG_DATA);
  // private readonly dataService = inject(DataService);
  // private state: WritableSignal<SportsState> = signal<SportsState>({
  //   sportCards: []
  // });
  sports!: Card;
  sportsStore = inject(SportsStore);
 

  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
    this.itemForm.valueChanges.subscribe(data => console.log(data));
  }
  initItemForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }

  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
    }
  }

  // onSaveOrUpdate(): void {
  //   this.dialogRef.close({ data: this.itemForm.value });
  // }
  onSaveOrUpdate(): void {
    if(!this.dialogData)
    {
      this.sportsStore.saveSport({...this.itemForm.value,id:Math.random.toString()});
      this.dialogRef.close({ data: this.itemForm.value });
      return;
    }
    this.sportsStore.updateSport(this.dialogData.id,this.itemForm.value);
    this.dialogRef.close({ data: this.itemForm.value }); 
  }

}
