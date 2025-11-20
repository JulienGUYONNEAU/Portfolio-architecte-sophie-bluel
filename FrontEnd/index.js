const gallery = document.querySelector('.gallery');
gallery.innerHTML = '';
console.log(gallery);

fetch('http://localhost:5678/api/works')
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error('Erreur HTTP : ' + response.status);
    }
    return response.json();
  })
  .then(works => {
    works.forEach(async (work) => {
      const divWork = document.createElement('div');
      const imgWork = document.createElement('img');
      imgWork.src = work.imageUrl;
      const titleWork = document.createElement('p');
      titleWork.textContent = work.title;

      divWork.appendChild(imgWork);
      divWork.appendChild(titleWork);


    //   divWork.innerHTML = `
    //     <figure>
    //     <img src=${work.imageUrl}>
    //     <figcaption>${work.title}</figcaption>
    //     </figure>
    //   `;

      gallery.appendChild(divWork);
    });
  })