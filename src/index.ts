 import { User } from './User';
 import { Company } from './Company';
 import { CustomMap} from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomMap('map'); 

const grimsby = {
    location:{
        lat:53.5675,
        lng: 0.0808
    }
}

customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(grimsby);
// console.log(user);
// console.log(company);

