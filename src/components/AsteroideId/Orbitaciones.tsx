import { orbital_data } from "./TypesAsteroide";

const Orbitaciones: React.FC<{ orbitacion: orbital_data | null }> = ({orbitacion,}) => {
    return (
        <div>
        {orbitacion && (
            <dl>
            <dt>
                <b>Fecha de determinación de la órbita:</b>
            </dt>
            <dd>{orbitacion.orbit_determination_date}</dd>

            <dt>
                <b>Primera fecha de observación:</b>
            </dt>
            <dd>{orbitacion.first_observation_date}</dd>

            <dt>
                <b>Última fecha de observación:</b>
            </dt>
            <dd>{orbitacion.last_observation_date}</dd>
            <dt>
                <b>Arco de datos en días:</b>
            </dt>
            <dd>{orbitacion.data_arc_in_days.toLocaleString("en-US")}</dd>

            <dt>
                <b>Observaciones utilizadas:</b>
            </dt>
            <dd>{orbitacion.observations_used.toLocaleString("en-US")}</dd>

            <dt>
                <b>Incertidumbre de la órbita:</b>
            </dt>
            <dd>{orbitacion.orbit_uncertainty}</dd>

            <dt>
                <b>Intersección mínima de órbita:</b>
            </dt>
            <dd>{orbitacion.minimum_orbit_intersection}</dd>

            <dt>
                <b>Invariante de Tisserand de Júpiter:</b>
            </dt>
            <dd>{orbitacion.jupiter_tisserand_invariant}</dd>

            <dt>
                <b>Excentricidad:</b>
            </dt>
            <dd>{orbitacion.eccentricity}</dd>

            <dt>
                <b>Eje semimayor:</b>
            </dt>
            <dd>{orbitacion.semi_major_axis}</dd>

            <dt>
                <b>Inclinación:</b>
            </dt>
            <dd>{orbitacion.inclination}</dd>

            <dt>
                <b>Longitud del nodo ascendente:</b>
            </dt>
            <dd>{orbitacion.ascending_node_longitude}</dd>

            <dt>
                <b>Período orbital:</b>
            </dt>
            <dd>{orbitacion.orbital_period}</dd>

            <dt>
                <b>Distancia al perihelio:</b>
            </dt>
            <dd>{orbitacion.perihelion_distance}</dd>

            <dt>
                <b>Argumento del perihelio:</b>
            </dt>
            <dd>{orbitacion.perihelion_argument}</dd>

            <dt>
                <b>Distancia al afelio:</b>
            </dt>
            <dd>{orbitacion.aphelion_distance}</dd>

            <dt>
                <b>Tiempo del perihelio:</b>
            </dt>
            <dd>{orbitacion.perihelion_time}</dd>

            <dt>
                <b>Anomalía media:</b>
            </dt>
            <dd>{orbitacion.mean_anomaly}</dd>

            <dt>
                <b>Movimiento medio:</b>
            </dt>
            <dd>{orbitacion.mean_motion}</dd>

            <dt>
                <b>Equinoccio:</b>
            </dt>
            <dd>{orbitacion.equinox}</dd>
            </dl>
        )}
        </div>
    );
};

export default Orbitaciones;
