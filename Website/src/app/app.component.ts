import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PageModificationComponent } from './page-modification/page-modification.component';
import { PagePatientsComponent } from './page-patients/page-patients.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
           MatIconModule,
           PagePatientsComponent,
           PageModificationComponent,
           SidebarComponent,
           AdminPageComponent,
           DashboardComponent,
           HeaderComponent,
           ChatbotComponent,
           DoctorsComponent,
           DoctorCardComponent
        ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'XpeRay';
  
}




