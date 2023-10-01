import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { DataService } from 'src/app/data/data.service';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, RouterModule,MatIconModule,MatDialogModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly dialog = inject(MatDialog);

  addNew(): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        console.log(result.data);
        // emit update event and call service from parent to update card
      }
    });
  }

    login(): void
    {
     this.authService.authenticate();
    }

    // data:string | undefined;
    // private readonly dataService = inject(DataService)

    // implementData(){
    //   this.data = this.dataService.fetchData();
    // }

}


