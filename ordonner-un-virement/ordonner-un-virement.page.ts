import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns'

@Component({
  selector: 'app-ordonner-un-virement',
  templateUrl: './ordonner-un-virement.page.html',
  styleUrls: ['./ordonner-un-virement.page.scss'],
})
export class OrdonnerUnVirementPage implements OnInit {
  showPicker!: boolean;
  dateValue= format(new Date() , "yyyy-MM-dd" )+ "T09:00:00.000Z";
  formatedString="";


  constructor() {
    this.setToday();
  }

  ngOnInit() {
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
