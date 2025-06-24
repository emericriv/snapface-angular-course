import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Goku';
    this.description = 'A simple face snap component';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl =
      'https://gallerymurciano.com/wp-content/uploads/2024/03/Young-Goku.jpg';
  }
}
