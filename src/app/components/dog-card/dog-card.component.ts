import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/app/models/interfaces/dogs/breed';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
})
export class DogCardComponent implements OnInit {
  @Input() breed: Breed | null = null;
  @Input() img: string = '';
  constructor() {}

  ngOnInit(): void {}
}
