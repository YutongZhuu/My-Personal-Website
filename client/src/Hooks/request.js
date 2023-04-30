
const API_URL = 'http://localhost:3001';

export async function httpGetContent() {
    const response = await fetch(`${API_URL}/content`);
    return await response.json();
}