import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TitleComponent } from 'src/app/title/title.component';
import { IconsComponent } from 'src/app/icons/icons.component';
import { ItemsComponent } from 'src/app/items/items.component';

@NgModule({
  declarations: [TitleComponent, IconsComponent, ItemsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatBadgeModule,
    RouterModule,
    TitleComponent,
    IconsComponent,
    ItemsComponent,
  ],
})
export class ShareModule {}
