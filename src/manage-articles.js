const fs = require('fs');
const path = require('path');


const fetchArticles = () => {
  try {
    return JSON.parse(fs.readFileSync(path.join('__DIRNAME', '../database/database.json')));
  } catch (e) {
    return [];
  }
};

const saveArticles = articles => {
  try {
    fs.writeFileSync(path.join('__DIRNAME', '../database/database.json'), JSON.stringify(articles));
  } catch (e) {
    console.log(e);
  }
};

const addArticle = (article) => {
  const articles = fetchArticles();
  articles.push(article);
  saveArticles(articles);
};

module.exports = {
  addArticle
};
