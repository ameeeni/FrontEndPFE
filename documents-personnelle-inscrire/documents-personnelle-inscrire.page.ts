import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Doc} from "../client-particulier/doc";
import { Camera } from '@capacitor/camera';
import {CameraResultType, CameraSource} from "@capacitor/camera";

@Component({
  selector: 'app-documents-personnelle-inscrire',
  templateUrl: './documents-personnelle-inscrire.page.html',
  styleUrls: ['./documents-personnelle-inscrire.page.scss'],
})
export class DocumentsPersonnelleInscrirePage implements OnInit {
  doc= new Doc();
  documentsForm !: FormGroup;
  constructor(private fb : FormBuilder ) { }

  ngOnInit() {
   this.documentsForm = this.fb.group({
     carteRecto : this.fb.control('' ),
     carteVerso: this.fb.control('' ),
     justRev : this.fb.control(''),
     justCp: this.fb.control(''),
     justAdresse : this.fb.control(''),
 })
  }
// image!: string;
//   async addPhoto(source: string) {
//     if (source === 'camera') {
//       console.log('camera');
//       const cameraPhoto = await this.openCamera();
//       this.image = 'data:image/jpg;base64,' + cameraPhoto;
//     } else {
//       console.log('library');
//       const libraryImage = await this.openLibrary();
//       this.image = 'data:image/jpg;base64,' + libraryImage;
//     }
//   }
//   async openLibrary() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE,
//       targetWidth: 1000,
//       targetHeight: 1000,
//       sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
//     };
//     return await this.camera.getPicture(options);
//   }
//   async openCamera() {
//     const options: CameraOptions = {
//       quality: 100,
//       destinationType: this.camera.DestinationType.DATA_URL,
//       encodingType: this.camera.EncodingType.JPEG,
//       mediaType: this.camera.MediaType.PICTURE,
//       targetWidth: 1000,
//       targetHeight: 1000,
//       sourceType: this.camera.PictureSourceType.CAMERA
//     };
//     return await this.camera.getPicture(options);
//   }
  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    // Handle the captured image
    console.log(image);
  }

}
