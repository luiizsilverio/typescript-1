import { Imprimivel } from "./imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {
}
