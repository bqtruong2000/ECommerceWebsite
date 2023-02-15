import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}
  private data: string = '';
  private dataChangeCallBack: ((data: string) => void)[] = [];

  public sum(a: number, b: number): number {
    return a + b;
  }

  public setData(data: string): void {
    this.data = data;
    this.dataChangeCallBack.forEach((callback) => callback(data));
  }
  public getData(): string {
    return this.data;
  }
  public setOnDataChange(callback: (data: string) => void) {
    callback(this.data);
  }
}
