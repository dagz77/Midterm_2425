import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { UserDetailsComponent } from "../user-details/user-details.component";
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, FooterComponent, UserDetailsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
