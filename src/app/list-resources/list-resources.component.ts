import { Component, OnInit } from '@angular/core';
import { Resource } from '../models/Resource';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.component.html',
  styleUrls: ['./list-resources.component.css']
})
export class ListResourcesComponent implements OnInit {
  resources: Array<Resource>
  constructor(private resourceService: ResourceService) {
    this.resourceService.getResources().subscribe(res => {
      this.resources = res['data'];
    })
   }

  ngOnInit() {
  }

}
