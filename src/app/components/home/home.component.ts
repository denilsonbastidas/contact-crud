import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MethodsService]
})
export class HomeComponent implements OnInit {

  public ArrayContact: any;

  constructor(
    private _methodService: MethodsService
  ) { }

  ngOnInit(): void {
    this.listContact();
  }
  // mostrar contactos
  listContact() {
    this._methodService.listContact().subscribe(
      result => {
        this.ArrayContact = result.contacts;
      }, err => {
        console.log(err);
      }
    )
  }
  // eliminar contactos
  deleteContact(e: any) {
    if (confirm("¿Estas seguro de eliminar?")) {
      this._methodService.deleteContact(e.target.name).subscribe(
        result => {
          this.listContact();
        },err =>{
          console.log(err);
          
        }
      );
    }
  }
 
}
