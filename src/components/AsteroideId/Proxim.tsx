import { close_approach_data } from "./TypesAsteroide"


const Proxim: React.FC<{aprox : close_approach_data[] | null}> = ({ aprox }) => {
    return (
        <>
            {aprox && aprox.map(approach => (
                <div className='mt-4' key={approach.close_approach_date}>
                    <h3><b>{approach.close_approach_date_full}</b></h3>
                    <p><b>Velocidad relativa:</b> {approach.relative_velocity.kilometers_per_hour} km/h</p>
                    <p><b>Distancia de aproximación:</b> {approach.miss_distance.kilometers} km</p>
                </div>
            ))}
        </>
    )
}

export default Proxim