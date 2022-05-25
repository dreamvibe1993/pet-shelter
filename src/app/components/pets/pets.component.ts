import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/models/interfaces/pets/pet';
import { LoadPetsService } from 'src/app/services/load-dogs/load-dogs.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  loadDogsHttpRequest: LoadPetsService = new LoadPetsService(this.http);
  
  /* For drag'n'drop columns. */
  petsArray1: Array<Pet> = [];
  petsArray2: Array<Pet> = [];
  petsArray3: Array<Pet> = [];
  /* ************************ */
  
  dogsSubscription: Subscription | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dogsSubscription = this.loadDogsHttpRequest
      .getDogs(
        'https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=50'
      )
      .subscribe({
        next: (response: Array<Pet>) => {
          const dataLength = response.length;
          const aThird = Math.abs(dataLength / 3);
          this.petsArray1 = response.slice(0, aThird);
          this.petsArray2 = response.slice(aThird, aThird * 2);
          this.petsArray3 = response.slice(aThird * 2, dataLength + 1);
        },
        error: (error: Error) => {
          console.error(error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.dogsSubscription) this.dogsSubscription.unsubscribe();
  }

  drop(event: CdkDragDrop<Array<Pet>>) {
    console.log(
      event.previousContainer,
      event.container,
      event.previousContainer === event.container
    );
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
