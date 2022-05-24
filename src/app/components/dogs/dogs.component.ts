import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dog } from 'src/app/models/interfaces/dogs/dog';
import { LoadDogsService } from 'src/app/services/load-dogs/load-dogs.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  loadDogsHttpRequest: LoadDogsService = new LoadDogsService(this.http);
  dogsArray1: Array<Dog> = [];
  dogsArray2: Array<Dog> = [];
  dogsArray3: Array<Dog> = [];
  dogsSubscription: Subscription | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dogsSubscription = this.loadDogsHttpRequest.getDogs().subscribe({
      next: (response: Array<Dog>) => {
        const dataLength = response.length;
        const aThird = Math.abs(dataLength / 3);
        this.dogsArray1 = response.slice(0, aThird);
        this.dogsArray2 = response.slice(aThird, aThird * 2);
        this.dogsArray3 = response.slice(aThird * 2, dataLength + 1);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.dogsSubscription) this.dogsSubscription.unsubscribe();
  }

  drop(event: CdkDragDrop<Array<Dog>>) {
    console.log(event.previousContainer, event.container, event.previousContainer === event.container)
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
