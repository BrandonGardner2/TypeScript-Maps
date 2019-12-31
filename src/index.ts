import User from './models/User';
import Company from './models/Company';
import GoogleMap from './models/Map';

const map = new GoogleMap('map');
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);