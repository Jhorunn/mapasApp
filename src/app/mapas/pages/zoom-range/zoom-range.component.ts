import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container {
        width: 100%;
        height: 100%;
      }
      .row{
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-76.638248, 20.381097],
      zoom: this.zoomLevel
    });

  }

  zoomIn() {
    this.zoomLevel = this.mapa.getZoom();
    this.mapa.zoomIn();
  }

  zoomOut() {
    this.zoomLevel = this.mapa.getZoom();
    this.mapa.zoomOut();
  }

}
