export function groupObjectsEvenly(arr: any[]) {
  const objectsPerArray = Math.ceil(arr.length / 4);

  const groupedArrays = arr.reduce((result, item, index) => {
    const currentGroupIndex = Math.floor(index / objectsPerArray);

    if (!result[currentGroupIndex]) {
      result[currentGroupIndex] = [];
    }

    result[currentGroupIndex].push(item);

    return result;
  }, []);

  return groupedArrays;
}
