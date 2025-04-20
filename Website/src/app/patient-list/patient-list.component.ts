import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, TruncatePipe],
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {
  patients = [
    {
      id: '1',
      name: 'Aziz Souid',
      imageUrl: 'https://th.bing.com/th/id/OIP.pLWb3swkmlRl7Lq8SF6gngHaE7?rs=1&pid=ImgDetMain',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Mild pleural effusion detected in right lung.',
      mindMateSummary: 'Patient exhibits signs of moderate anxiety with occasional depressive episodes. Shows improvement in sleep patterns.',
      mindMateFull: 'Detailed analysis: Patient reports persistent worry about health (score: 7/10). PHQ-9 indicates mild depression (score: 12). CBT techniques show 30% reduction in anxiety symptoms over 4 weeks. Recommended: Bi-weekly follow-ups.',
      mindMateSeverity: 'medium',
      lastVisit: '2025-05-15'
    },
    {
      id: '2',
      name: 'Fakhri Mahfoudh',
      imageUrl: 'https://assets-global.website-files.com/6427090c51c66c8cc62af550/6427090c51',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Normal cardiac silhouette. No pleural effusion or pneumothorax.',
      mindMateSummary: 'Stable mood with no signs of acute distress. Engages well in therapy.',
      mindMateFull: 'Detailed analysis: GAD-7 score: 4 (minimal anxiety). Strong social support system noted. Last session focused on stress management techniques. No medication changes required.',
      mindMateSeverity: 'low',
      lastVisit: '2025-04-05'
    },
    {
      id: '3',
      name: 'Oussama Chabene',
      imageUrl: 'https://www.usemultiplier.com/wp-content/uploads/2023/03/benefits-img-1.png',
      xrayImageUrl: 'https://static.turbosquid.com/Preview/2014/07/06__19_51_08/1.jpg26047687-7f62-4cf7-b196-083682973f07Zoom.jpg',
      xrayDescription: 'Bilateral upper lobe fibronodular opacities with cavitary lesions. No significant lymphadenopathy.',
      mindMateSummary: 'High-risk suicidal ideation detected in latest journal entries. Immediate intervention required. High-risk suicidal ideation detected in latest journal entries. Immediate intervention required.',
      mindMateFull: 'CRITICAL: Patient journal entry on 2025-04-18 contains phrases "I cant go on" and "no way out". PHQ-9 score: 23 (severe depression). Emergency contact notified. Requires 24/7 monitoring.',
      mindMateSeverity: 'high',
      lastVisit: '2025-02-01'
    }
  ];

  showXRayModal = false;
  showMindMateModal = false;
  selectedXRayImage = '';
  selectedPatient: any = null;

  constructor(private router: Router) {}

  viewXRay(patient: any) {
    this.selectedXRayImage = patient.xrayImageUrl;
    this.selectedPatient = patient;
    this.showXRayModal = true;
    document.body.style.overflow = 'hidden';
  }

  openMindMateModal(patient: any) {
    this.selectedPatient = patient;
    this.showMindMateModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showXRayModal = false;
    document.body.style.overflow = '';
  }

  closeMindMateModal() {
    this.showMindMateModal = false;
    document.body.style.overflow = '';
  }

  modifyPatient(patient: any) {
    this.router.navigate(['/modification'], {
      state: { 
        patientData: {
          name: patient.name,
          xrayDescription: patient.xrayDescription,
        }
      }
    });
  }
}