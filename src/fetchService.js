export async function fetchImage(url) {
    const res = await fetch(url);
    const data = await res.json();
    return await data;
}

export async function postComment(url) {
    fetch('https://boiling-refuge-66454.herokuapp.com/images/237/comments', {
        Method: 'POST',
        Headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        Body: JSON.stringify({payload : 'hi!'}),
      })
}