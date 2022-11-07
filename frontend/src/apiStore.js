
export async function fetchDogImages() {
    const url = "http://localhost:5000/dog_images";
    const response = await fetch(url);
    return response.text();
}