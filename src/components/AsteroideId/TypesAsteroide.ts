

export type miss_distance = {
    kilometers: string
}

export type relative_velocity = {
    kilometers_per_hour: string
}

export type close_approach_data ={
    close_approach_date: string
    miss_distance: miss_distance
    close_approach_date_full: string
    relative_velocity: relative_velocity
}

export type orbit_class = {
    orbit_class_type: string
    orbit_class_range: string
    orbit_class_description: string
}

export type orbital_data = {
    equinox: string
    mean_motion: string
    inclination: string
    mean_anomaly: string
    eccentricity: string
    orbital_period: string
    perihelion_time: string
    semi_major_axis: string
    orbit_class: orbit_class
    data_arc_in_days: number
    orbit_uncertainty: string
    observations_used: number
    aphelion_distance: string
    perihelion_argument: string
    perihelion_distance: string
    last_observation_date: string
    first_observation_date: string
    ascending_node_longitude: string
    orbit_determination_date: string
    minimum_orbit_intersection: string
    jupiter_tisserand_invariant: string
}

export type kilometers = {
    estimated_diameter_max: string
    estimated_diameter_min: string
}

export type estimated_diameter = {
    kilometers: kilometers
}

export type near_earth_objects = {
    name: string
    designation: string
    orbital_data: orbital_data
    absolute_magnitude_h: string
    estimated_diameter: estimated_diameter
    close_approach_data: close_approach_data[]
    is_potentially_hazardous_asteroid: boolean
}

