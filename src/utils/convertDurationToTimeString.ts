export function convertDurationToTimeString(duration: number){
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) // adiciona um 0 para formar 2 dígitos (1 => 01)
        .join(':')

    return timeString;
}