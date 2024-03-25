export type rover = {
    status: string
    name:  string
    total_photos: number
}

export type camera = {
    full_name: string
    name: string
}

export type Photos = {
    camera: camera
    rover: rover
    earth_date: string
    id: number
    img_src: string
}