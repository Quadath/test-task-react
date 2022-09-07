export async function fetchImage(url) {
    const res = await fetch(url);
    const data = await res.json();
    return await data;
}
