
export function listenToScreenWidth(arr,container) {
  const screenWidth = window.innerWidth;
  switch (true) {
    case screenWidth < 767:

      break;

    case screenWidth >= 768 && screenWidth < 1023:

      const middleIndex = Math.floor(arr.length / 2); // obtener el índice medio
      const firstHalf = arr.slice(0, middleIndex); // obtener la primera mitad
      const secondHalf = arr.slice(middleIndex); // obtener la segunda mitad


      let sum = 0;
      secondHalf.forEach(i => {
        sum = sum + i.offsetHeight
      })
      const heightSum = sum + (secondHalf.length-1)*8
      container.style.height = `${heightSum}px`;

      break;

    case screenWidth >= 1024:
      const partSize = Math.floor(arr.length / 3); // obtener el índice medio
      const firstPart = arr.slice(0, partSize); // obtener la primera parte
      const secondPart = arr.slice(partSize, partSize * 2); // obtener la segunda parte
      const thirdPart = arr.slice(partSize * 2); // obtener la tercera parte


      let sum3 = 0;
      secondPart.forEach(i => {
        sum3 = sum3 + i.offsetHeight
      })
      const heightSum3 = sum3 + (secondPart.length-1)*8
      container.style.height = `${heightSum3}px`;

      break;
    default:
      break;
  }
}

