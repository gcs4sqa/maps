import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: 'blue';


    constructor(){

        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())

        };

    }

    markerContent():string {
        return `user name is ${this.name}`;
    }

    //faker package at npmjs.com
} 