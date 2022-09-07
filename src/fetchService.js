export async function fetchImages(url, setState) {
    const res = await fetch(url);
    const data = await res.json();
    return await data;
}