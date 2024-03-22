export type EstimatedDiameterKilometers = {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
};

export type EstimateDiameter = {
    kilometers: EstimatedDiameterKilometers;
};

export type typesGetNeo = {
    id: string;
    name: string;
    designation: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimateDiameter;
    is_potentially_hazardous_asteroid: boolean;
};

export type orbitClass = {
    orbit_class_description: string;
    orbit_class_range: string;
    orbit_class_type: string;
};

export type orbital_data = {
    ascending_node_longitude: string;
    data_arc_in_days: number;
    eccentricity: string;
    first_observation_date: string;
    inclination: string;
    jupiter_tisserand_invariant: string;
    last_observation_date: string;
    minimum_orbit_intersection: string;
    observations_used: number;
    orbit_class: orbitClass;
    orbit_determination_date: string;
    orbit_uncertainty: string;
    orbital_period: string;
    semi_major_axis: string;
    perihelion_distance: string;
    perihelion_argument: string;
    aphelion_distance: string;
    perihelion_time: string;
    mean_anomaly: string;
    mean_motion: string;
    equinox: string;
};

export type relativeVelocity = {
    kilometers_per_hour: string;
};

export type missDistance = {
    kilometers: string;
};

export type close_approach_data = {
    close_approach_date: string;
    close_approach_date_full: string;
    relative_velocity: relativeVelocity;
    miss_distance: missDistance;
};

export type getNeo = {
    id: string;
    name: string;
    designation: string;
    absolute_magnitude_h: number;
    estimated_diameter: EstimateDiameter;
    is_potentially_hazardous_asteroid: boolean;
    near_earth_objects: typesGetNeo[];
    orbital_data: orbital_data;
    close_approach_data: close_approach_data[];
}

