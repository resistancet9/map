import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../config/config.service';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  @ViewChild('map', { static: true}) mapElement: any;
  map: google.maps.Map;
  service;
  valueSelected = 'Select City';
  private cities: any;
  constructor( private apiService: ApiService ) {
    
  }

  getData() {
    this.apiService.getConfig().subscribe(data => {
      this.cities = data;
    })
  }

  onSelect(e) {
    this.valueSelected = e;
    var request = {
      query: e + ', india',
      fields: ['name', 'geometry'],
    };
    this.service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i])
        }
        this.map.setCenter(results[0].geometry.location);
      }
    });
  }

  ngAfterViewInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
    this.service = new google.maps.places.PlacesService(this.map);
  }

  ngOnInit() {
    this.getData();
  }

}
