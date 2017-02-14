console.clear();

const newArticleFormDOM = document.querySelector('.new-article-form');
newArticleFormDOM.addEventListener('submit', handleNewArticle);


function handleNewArticle(e) {
  e.preventDefault();

  const text = this.querySelector('[name=article]').value;
  const newArticle = { text };
  get('addArticle', newArticle);

  this.reset();
}


function get(path, article) {
  const url = `http://localhost:3000/${path}`;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true); // true means async and actually it's the default
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('Response received', this.response);
    }
  };
  xhr.send(JSON.stringify(article));
}
