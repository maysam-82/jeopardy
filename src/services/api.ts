import axios from 'axios';

export async function getDataFromAPI<T>(apiURL: string): Promise<T[]> {
	const response = await axios.get<T[]>(apiURL);
	return response.data;
}
