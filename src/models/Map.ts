import User from './User';
import Company from './Company';

export interface Mappable {
  location: {
    lat: number,
    lng: number,
  }
}

class GoogleMap {
  private googleMap: google.maps.Map;

  constructor(id: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(id), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  addMarker({ location }: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: location,
    });
  }
}

export default GoogleMap;