const myPromises = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //!YO QUIERO MI DINERO
    // resolve(100);
    reject('No hay dinero');
  }, 2000);
});

myPromises
  .then((myMonyIsBack) => console.log(`Tengo mi dinero ${myMonyIsBack}`))
  .catch((err) => console.warn(err))
  .finally(() => console.log('Termino el proceso de promesa'));
