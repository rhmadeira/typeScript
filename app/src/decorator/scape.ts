export function scape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const retorno = metodoOriginal.apply(this, args);
    const retornoString = JSON.stringify(retorno);
    // console.log(
    //   `@scape em ação na classe ${target.constructor.name} e método ${propertyKey}`
    // );
    return retornoString.replace(/<script>[\s\S]*?<\/script>/, "");
  };

  return descriptor;
}
