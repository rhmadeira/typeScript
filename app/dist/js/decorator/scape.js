export function scape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = metodoOriginal.apply(this, args);
        const retornoString = JSON.stringify(retorno);
        return retornoString.replace(/<script>[\s\S]*?<\/script>/, "");
    };
    return descriptor;
}
