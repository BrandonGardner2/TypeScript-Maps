import User from './models/User';
import Company from './models/Company';

const mapElem = document.getElementById('map');
const map = new google.maps.Map(mapElem, {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
});