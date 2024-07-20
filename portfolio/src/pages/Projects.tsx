import { Countries } from "../components/projects/Countries";
import { Cvitae } from "../components/projects/Cvitae";
import { EligiendoUnFuturo } from "../components/projects/EligiendoUnFuturo";

export function Projects (){
    return (
        <div>
            <h2>Proyectos</h2>
            <EligiendoUnFuturo />
            <Cvitae />
            <Countries />
        </div>
    );
}