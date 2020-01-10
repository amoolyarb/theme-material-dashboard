import { Component, OnInit } from '@angular/core';

declare interface Subject {
  id: number,
  title: string,
  icon: string
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})

export class TestsComponent implements OnInit {
  subjects: Subject[];

  constructor() { }

  ngOnInit() {
    this.subjects = [
      { id: 1, title: 'Anaesthesia', icon: '' },
			{ id: 1, title: 'Anatomy and Physiology', icon: '' },
      { id: 1, title: 'Cardiology', icon: '' },
      { id: 1, title: 'Clinical Skills', icon: '' },
      { id: 1, title: 'Community Nursing', icon: '' },
      { id: 1, title: 'Critical Care', icon: '' },
      { id: 1, title: 'Dermatology', icon: '' },
      { id: 1, title: 'Ear, Nose and Throat', icon: '' },
      { id: 1, title: 'Education', icon: '' },
      { id: 1, title: 'Emergency Medicine', icon: '' },
      { id: 1, title: 'Emergency Nursing', icon: '' },
      { id: 1, title: 'Endocrinology and Diabetes', icon: '' },
      { id: 1, title: 'Forensics', icon: '' },
      { id: 1, title: 'Gastroenterology', icon: '' },
      { id: 1, title: 'General Dentistry', icon: '' },
      { id: 1, title: 'General Medicine', icon: '' },
      { id: 1, title: 'General Practice', icon: '' },
      { id: 1, title: 'Geriatrics', icon: '' },
      { id: 1, title: 'Guidelines', icon: '' },
      { id: 1, title: 'Haematology', icon: '' },
      { id: 1, title: 'Hypertension', icon: '' },
      { id: 1, title: 'Immunology', icon: '' },
      { id: 1, title: 'Internal Medicine', icon: '' },
      { id: 1, title: 'Maxillofacial and Plastic Surgery', icon: '' },
      { id: 1, title: 'Medical Law', icon: '' },
      { id: 1, title: 'Medical Statistics', icon: '' },
      { id: 1, title: 'Mental Health/Psychiatric Nursing', icon: '' },
      { id: 1, title: 'Microbiology', icon: '' },
      { id: 1, title: 'Midwifery', icon: '' },
      { id: 1, title: 'Nephrology', icon: '' },
      { id: 1, title: 'Neurology', icon: '' },
      { id: 1, title: 'Nursing', icon: '' },
      { id: 1, title: 'Obstetrics and Gynaecology', icon: '' },
      { id: 1, title: 'Occupational Health', icon: '' },
      { id: 1, title: 'Occupational Therapy', icon: '' },
      { id: 1, title: 'Oncology', icon: '' },
      { id: 1, title: 'Ophthalmology', icon: '' },
      { id: 1, title: 'Oral and Maxillofacial Surgery', icon: '' },
      { id: 1, title: 'Oral Medicine', icon: '' },
      { id: 1, title: 'Orthopaedics', icon: '' },
      { id: 1, title: 'Paediatric Nursing', icon: '' },
      { id: 1, title: 'Paediatrics', icon: '' },
      { id: 1, title: 'Pain Medicine', icon: '' },
      { id: 1, title: 'Palliative Care', icon: '' },
      { id: 1, title: 'Pathology and Laboratory Medicine', icon: '' },
      { id: 1, title: 'Pharmacology', icon: '' },
      { id: 1, title: 'Pharmacy', icon: '' },
      { id: 1, title: 'Psychiatry', icon: '' },
      { id: 1, title: 'Public Health', icon: '' },
      { id: 1, title: 'Radiology', icon: '' },
      { id: 1, title: 'Respiratory', icon: '' },
      { id: 1, title: 'Restorative Dentistry', icon: '' },
      { id: 1, title: 'Rheumatology', icon: '' },
      { id: 1, title: 'Stroke', icon: '' },
      { id: 1, title: 'Surgery', icon: '' },
      { id: 1, title: 'Urology', icon: '' }
    ]
  }
}
