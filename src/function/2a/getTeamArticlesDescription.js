"use strict";
exports.__esModule = true;
function getTeamArticlesDescription(x) {
    var currentTeam = teams.find(function (team) { return team.id === x; }) || null;
    if (!currentTeam)
        return "wrong team";
    var result = currentTeam.members.map(function (member) {
        var currentAuthors = authors.find(function (author) { return author.id === member; }) || null;
        if (!currentAuthors)
            return "wrong author";
        var currentArticles = articles.filter(function (article) {
            if (!article.authors)
                return false;
            return article.authors.includes(currentAuthors.id);
        });
        var sumArticles = !currentArticles.length
            ? "wrote 0 articles"
            : currentArticles.length === 1
                ? "wrote an article"
                : "wrote articles";
        var listArticles = [];
        currentArticles.forEach(function (article, index) {
            if (index > 2) {
            }
            else if (index === 2) {
                listArticles.push(" and " + (currentArticles.length - 2) + " more");
            }
            else if (currentArticles.length === 2 && index === 0) {
                listArticles.push(" '" + article.text + "' and");
            }
            else if (currentArticles.length === 2 || index === 0) {
                listArticles.push(" '" + article.text + "'");
            }
            else if (index < 2) {
                listArticles.push(", '" + article.text + "'");
            }
        });
        return currentAuthors.name + " " + sumArticles + (listArticles.join("") +
            ".");
    });
    return result.join("\n");
}
var articles = [
    { id: 1, text: "MobX in practise", authors: [3] },
    { id: 33, text: "RxJS and redux-observable", authors: [1, 2, 3, 5, 6, 7] },
    { id: 23, text: "Firebase", authors: [7, 2, 3] },
    { id: 333, text: "Really cool article" },
    { id: 1234, text: "Ramda.js and Redux combined", authors: [2] },
    { id: 2, text: "CSS in JS", authors: [3, 5] },
];
var authors = [
    { id: 1, name: "Oliver" },
    { id: 2, name: "Jan" },
    { id: 3, name: "Jakub" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Tomas" },
    { id: 6, name: "Drahoslav" },
    { id: 7, name: "Honza" },
];
var teams = [
    { id: 1, name: "Webscope 1", members: [1, 2, 3, 4] },
    { id: 2, name: "Webscope 2", members: [5, 6, 7] },
];
module.exports = { getTeamArticlesDescription: getTeamArticlesDescription };
exports["default"] = getTeamArticlesDescription;
