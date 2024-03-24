export type EstimatedDiameterKilometers = {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
};

export type EstimateDiameter = {
    kilometers: EstimatedDiameterKilometers;
};

export type near_earth_objects = {
    id: string
    name: string
    designation: string
    absolute_magnitude_h: number
    estimated_diameter: EstimateDiameter
    is_potentially_hazardous_asteroid: boolean
}


export type data = {
    near_earth_objects: near_earth_objects[]
}