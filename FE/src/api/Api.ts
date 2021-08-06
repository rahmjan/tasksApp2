import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const BE_URL: string = 'http://localhost:8080';

async function getRequest<T>(
  setData: Dispatch<SetStateAction<T>>, 
  path: string
) : Promise<void> 
{
  try {
    const data = (await axios.get<T>(BE_URL + path)).data;
    console.log('Got data from: ' + path);
    setData(data);
  } catch (error) { 
    console.log('Error from reading: ' + path + ' Error: ' + error);
  }
}

export interface taskI {
  uuid: string,
  name: string,
  shortDescription: string
}

export function fetchTasks(setData: Dispatch<SetStateAction<taskI[]>>) : void {
  getRequest<taskI[]>(setData, '/tasks');
}