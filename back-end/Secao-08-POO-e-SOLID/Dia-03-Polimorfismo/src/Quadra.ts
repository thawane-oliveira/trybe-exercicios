import { IAgenda } from "./interfaces/Agenda";

abstract class Quadra {
  protected abstract reservar<T>(horaReserva: Date): IAgenda<T>;
 }

export default Quadra;