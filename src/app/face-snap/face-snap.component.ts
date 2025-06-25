import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
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
    this.faceSnap.unSnap();
    this.snapbuttonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  snap(): void {
    this.faceSnap.snap();
    this.snapbuttonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
