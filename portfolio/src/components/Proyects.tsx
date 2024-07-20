import { EligiendoUnFuturo } from "./projects/EligiendoUnFuturo";
import { Cvitae } from "./projects/Cvitae";
import { Countries } from "./projects/Countries";
import './../styles/projects.css'
export function Proyects() {
    return (
        <div>
            <h2>Proyectos</h2>
            <EligiendoUnFuturo />
            <Cvitae />
            <Countries />
        </div>
    );
}