import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";

@Component({
  selector: 'app-documents-perso',
  templateUrl: './documents-perso.page.html',
  styleUrls: ['./documents-perso.page.scss'],
})
export class DocumentsPersoPage implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
  }
}
