import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-particulier',
  templateUrl: './client-particulier.page.html',
  styleUrls: ['./client-particulier.page.scss'],
})
export class ClientParticulierPage implements OnInit {
  clientParForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.clientParForm = this.fb.group({
      cin : this.fb.control('' , [Validators.required]),
      date_de_naissance : this.fb.control('', [Validators.required]),
      lieu_de_naissance : this.fb.control('', [Validators.required]),
      profession : this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
    })
  }

}
