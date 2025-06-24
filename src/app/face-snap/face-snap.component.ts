import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;
  snapbuttonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapbuttonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap(): void {
    this.facesnap.unSnap();
    this.snapbuttonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  snap(): void {
    this.facesnap.snap();
    this.snapbuttonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
