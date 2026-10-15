
export type DatosTurno = {
    nombre: string
    apellido: string
    telefono: string
    fecha: string
    detalle: string
}

export type Turno = DatosTurno & { id: string };