import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/interfaces/pets/breed';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css'],
})
export class PetCardComponent implements OnInit {
  @Input() breed: Breed | null = null;
  @Input() img: string = '';
  constructor() {}

  ngOnInit(): void {}
}
