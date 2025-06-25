export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number
  ) {}

  snap(): void {
    this.snaps++;
  }

  unSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void {
    this.location = location;
  }
}
