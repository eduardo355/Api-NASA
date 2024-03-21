export type EstimatedDiameterKilometers = {
    estimated_diameter_max: number,
    estimated_diameter_min: number
}

export type EstimateDiameter = {
    kilometers: EstimatedDiameterKilometers
}

export type typesGetNeo = {
    id: string,
    name: string,
    designation: string,
    absolute_magnitude_h: number,
    estimated_diameter: EstimateDiameter,
    is_potentially_hazardous_asteroid: boolean,
}

export type orbitClass = {
    orbit_class_description: string,
    orbit_class_range: string,
    orbit_class_type: string
}


export type orbitalDate = {
    orbit_determination_date: string,
    first_observation_date: string,
    last_observation_date: string,
    data_arc_in_days: number,
    observations_used: number,
    orbit_uncertainty: string,
    minimum_orbit_intersection: string,
    orbit_class: orbitClass
}

export type getNeo = {
    id: string,
    name: string,
    designation: string,
    absolute_magnitude_h: number,
    estimated_diameter: EstimateDiameter,
    is_potentially_hazardous_asteroid: boolean,
    near_earth_objects: typesGetNeo[],
    orbital_data: orbitalDate
}
