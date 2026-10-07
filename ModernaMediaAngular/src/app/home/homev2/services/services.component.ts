import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss', './services.desktop.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class ServicesComponent {}
