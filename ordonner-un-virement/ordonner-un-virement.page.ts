import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns'
import {Virement} from "./virement";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ordonner-un-virement',
  templateUrl: './ordonner-un-virement.page.html',
  styleUrls: ['./ordonner-un-virement.page.scss'],
})
export class OrdonnerUnVirementPage implements OnInit {
  showPicker!: boolean;
  dateValue= format(new Date() , "yyyy-MM-dd" )+ "T09:00:00.000Z";
  formatedString="";

 virement = new Virement ();
 virementForm! : FormGroup;
  constructor(private fb: FormBuilder) {
    this.setToday();
  }

  ngOnInit() {
    this.virementForm = this.fb.group({
      ibandeb : this.fb.control('' , [Validators.required , Validators.maxLength(34 )] ),
      ibanrecp : this.fb.control('' ,[Validators.required , Validators.maxLength(34 )]),
      type_de_virement : this.fb.control('' ,[Validators.required]),
      date_de_virement : this.fb.control('' ,[Validators.required]),
      montant : this.fb.control('',[Validators.required])
    })
  }
  setToday(){
    this.formatedString=format(parseISO(format(new Date() , 'yyyy-MM-dd') +'T09:00:00.000Z') , 'HH:mm, MMM dd,  yyyy')
  }

  dateChanged(value:any) {
    this.dateValue=value;
    this.formatedString= format(parseISO(value) , 'HH:mm, MMM dd,  yyyy')
    this.showPicker=false;
  }
}
