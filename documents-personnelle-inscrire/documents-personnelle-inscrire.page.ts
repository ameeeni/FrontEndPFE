import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Doc} from "../client-particulier/doc";

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

}
