import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Square } from 'src/Modal/square';
 
@Component({
  // tslint:disable-next-line: use-host-property-decorator
  host: { class: 'pageContainer' },
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  constructor() { }
  @ViewChild('canvas', { read: false })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  ngOnInit() {
    console.log('on after view init', this.canvas);
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.animate();
    this.drawLine(0, 0, 0, 200);
    this.drawLine(0, 150, 300, 150);
    this.drawLine(10, 100, 10, 150);
  }

  animate(): void {
    this.ctx.fillStyle = 'black';
    const square = new Square(this.ctx);
    square.draw(1, 10, 80);
   }

  drawLine(startX, startY, endX, endY) {
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();
    this.ctx.shadowColor = 'red';
  }
}
