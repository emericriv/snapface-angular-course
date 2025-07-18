import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Goku',
      'Kig Goku charging its ki',
      'https://gallerymurciano.com/wp-content/uploads/2024/03/Young-Goku.jpg',
      new Date(),
      129
    ),
    new FaceSnap(
      'Vegeta',
      'Kig Vegeta charging its ki',
      'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/3-Vegeta-Buu-Saga-Cropped.jpg',
      new Date(),
      280
    ).withLocation('Capsule Corp'),
    new FaceSnap(
      'Gohan',
      'Kig Gohan charging its ki',
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/979e57cf-369b-4273-84e1-137ac6e7742e/ddhgk53-200139b9-2deb-4296-bae4-3f4e623d9b26.png/v1/fill/w_774,h_1032,q_70,strp/future_gohan_super_saiyan_by_songohanuzumaki_ddhgk53-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI3MiIsInBhdGgiOiJcL2ZcLzk3OWU1N2NmLTM2OWItNDI3My04NGUxLTEzN2FjNmU3NzQyZVwvZGRoZ2s1My0yMDAxMzliOS0yZGViLTQyOTYtYmFlNC0zZjRlNjIzZDliMjYucG5nIiwid2lkdGgiOiI8PTE3MDQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7HcC7vOX_vd6zzUb_dFphsY8DeLURObCRvHidEz-umw',
      new Date(),
      225
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}
