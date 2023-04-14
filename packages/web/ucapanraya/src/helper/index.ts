import data from "../../data/ucapan.json"

export function getRandomUcapan(nada: string): string {
    const filteredData = data.data.filter(item => item.nada === nada);
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex].ucapan;
  }
  