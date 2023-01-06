export function domInjector(seletor: string) {

  return function(target: any, propertyKey: string) {
    let elemento: HTMLElement;

    const getter = function() {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor);
        console.log(`buscando elemento do DOM ${seletor}`)
      }
      return elemento;
    }

    // aplica o getter criado à propriedade definida em propertyKey
    Object.defineProperty(target, propertyKey, {
      get: getter
    })
  }
}
