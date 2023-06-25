import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from "@capacitor/camera";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Doc} from "../client-particulier/doc";

@Component({
  selector: 'app-documents-perso',
  templateUrl: './documents-perso.page.html',
  styleUrls: ['./documents-perso.page.scss'],
})
export class DocumentsPersoPage implements OnInit {
  doc= new Doc();
  documentsForm !: FormGroup;
  constructor( private fb : FormBuilder) {
  }

  ngOnInit() {
    this.documentsForm = this.fb.group({
      carteRecto: this.fb.control(''),
      carteVerso: this.fb.control(''),
      justRev: this.fb.control(''),
      justCp: this.fb.control(''),
      justAdresse: this.fb.control('')
    });
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
