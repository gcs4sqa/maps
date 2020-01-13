
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    markerContent(): string
}

export class CustomMap{
    private googleMap: google.maps.Map;

    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),{
            zoom: 1,
            center: { 
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void{
        const maker = new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }
            });
        maker.addListener('click', () => {
            const inforwindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            inforwindow.open(this.googleMap, maker);

        })    
    }

}