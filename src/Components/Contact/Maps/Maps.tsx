
"use client"

import { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./maps.module.css";
import React from "react";


export interface MapProps {
	apiKey: string;
	lat: number;
	lng: number;
}

const mapContainerStyle = {
	width: "100%",
	height: "100%",
};

const center = (lat: number, lng: number) => ({
	lat: lat,
	lng: lng,
});

export const MapComponent: FC<MapProps> = ({ apiKey, lat, lng }) => {
	const position = center(lat,lng)
	return (
		<div className={styles.mapWrapper}>
			<LoadScript googleMapsApiKey={apiKey}>
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					center={position}
					zoom={12}
				>
					<Marker position={position} />
				</GoogleMap>
			</LoadScript>
		</div>
	);
};
