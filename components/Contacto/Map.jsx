import { useState, useEffect, useRef } from 'react'

import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"

export default function Map() {
    
    const [map, setMap] = useState()
    const mapNode = useRef()

    useEffect(() => {
        const node = mapNode.current;

        if (typeof window === "undefined" || node === null) return;
    
        const mapboxMap = new mapboxgl.Map({
          container: node,
          accessToken: 'pk.eyJ1IjoibmF3ZXNhbjEyIiwiYSI6ImNsMDBodHRvMjBraWczbnI4eW02d2JiM2wifQ.Dv6VAACK0o4iGh64xHzNdQ',
          style: "mapbox://styles/mapbox/streets-v11",
          center: [-57.5944249, -37.9898876],
          zoom: 15,
        });
    
        setMap(mapboxMap);
            return () => {
            mapboxMap.remove();
        };
    }, []);

    const marker1 = new mapboxgl.Marker().setLngLat([-57.5944249, -37.9898876]).addTo(map);

    return (        
        <>
            <section className="map">
                <section 
                    ref={mapNode}
                    style={{width:'100%', height:'100%', borderRadius: '.5rem'}}
                />
            </section>

            <style jsx>{`
                .map {
                    grid-column:1 / 2;
                    grid-row:2 / 3;
                    padding:2rem;
                }    
            `}</style>
        </>
    )
}