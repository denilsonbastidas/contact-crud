import { Component, OnInit } from '@angular/core';
import { dateContact } from '../../models/contact.model'
import { MethodsService } from 'src/app/services/methods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css'],
  providers: [MethodsService]
})
export class FormCreateComponent implements OnInit {

  public date_contact: any;
  constructor(
    private _methodsSerivce: MethodsService,
    private Route: Router
  ) {
    this.date_contact = new dateContact('', 0);
  }

  ngOnInit(): void {
  }
  // crear un contacto
  createContact(e: any) {
    this._methodsSerivce.create(this.date_contact).subscribe(
      result => {
        console.log(result);
        this.Route.navigate(['/home']);
      }, error => {
        console.log(error);
      }
    )
  }
}


