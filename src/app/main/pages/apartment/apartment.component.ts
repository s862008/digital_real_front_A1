import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from "../../../core/services/data.service";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrl: './apartment.component.css'
})
export class ApartmentComponent {
  id: string =""; // Переменная для хранения параметра
data:any;
  constructor(private route: ActivatedRoute,  private dataService: DataService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';

      this.dataService.getData(this.id).subscribe(data => {
        this.data = data;
      });

    });
  }
}
