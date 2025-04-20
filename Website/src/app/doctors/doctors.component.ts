import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, MatIconModule, DoctorCardComponent],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctors = [
    {
      id: '1',
      name: 'Amira Ben Salah',
      specialty: 'Adult Psychiatry - Depression & Anxiety',
      location: 'Clinique Les Oliviers, Tunis',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
      availability: 'Mon-Fri: 8AM-6PM',
      price: 180
    },
    {
      id: '2',
      name: 'Karim Bouazizi',
      specialty: 'Child & Adolescent Psychiatry',
      location: 'Medical Center Carthage, Tunis',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300',
      availability: 'Tue-Sat: 9AM-5PM',
      price: 200
    },
    {
      id: '3',
      name: 'Samira Gharbi',
      specialty: 'Bipolar Disorder Specialist',
      location: 'International Hospital, Sousse',
      imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300',
      availability: 'Mon-Thu: 10AM-4PM',
      price: 220
    },
    {
      id: '4',
      name: 'Mohamed Trabelsi',
      specialty: 'Addiction Psychiatry',
      location: 'Clinique Ennasr, Ariana',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300',
      availability: 'Wed-Sun: 11AM-7PM',
      price: 190
    },
    {
      id: '5',
      name: 'Leila Abid',
      specialty: 'Cognitive Behavioral Therapy',
      location: 'Psychiatric Center, Monastir',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300',
      availability: 'Mon-Fri: 8:30AM-5:30PM',
      price: 210
    },
    {
      id: '7',
      name: 'Fatma Zaghbani',
      specialty: 'Geriatric Psychiatry',
      location: 'Clinique Essalem, Sfax',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
      availability: 'Sun-Thu: 9AM-4PM',
      price: 230
    },
    {
      id: '8',
      name: 'Hichem Ben Ammar',
      specialty: 'Forensic Psychiatry',
      location: 'Centre Médical Avicenne, Tunis',
      imageUrl: 'https://th.bing.com/th/id/OIP.HnH9beRWakOc_PO8jEWZ0gHaE8?rs=1&pid=ImgDetMain',
      availability: 'Mon-Wed: 1PM-8PM',
      price: 250
    },
    {
      id: '9',
      name: 'Salma Ben Youssef',
      specialty: 'Eating Disorders Specialist',
      location: 'Clinique El Manar, Tunis',
      imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300',
      availability: 'Tue-Fri: 10AM-6PM',
      price: 210
    },
    {
      id: '10',
      name: 'Riadh Cherif',
      specialty: 'Neuropsychiatry',
      location: 'Hôpital La Rabta, Tunis',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300',
      availability: 'Mon-Sat: 8AM-3PM',
      price: 240
    },
    {
      id: '11',
      name: 'Nadia Fersi',
      specialty: 'Perinatal Psychiatry',
      location: 'Clinique El Amen, Sousse',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
      availability: 'Mon-Thu: 9AM-5PM',
      price: 200
    },

  ];
}