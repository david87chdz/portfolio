import { Countries } from "../components/projects/Countries";
import { Cvitae } from "../components/projects/Cvitae";
import { EligiendoUnFuturo } from "../components/projects/EligiendoUnFuturo";

export function Projects() {
    return (
        <div className="py-12 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center justify-center projects">
            <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800  dark:text-gray-100">💻 Proyectos</h2>
                <div className="flex flex-col items-center gap-12">
                    <EligiendoUnFuturo />
                    <Cvitae />
                    <Countries />
                </div>
            </div>
        </div>
    );
}
