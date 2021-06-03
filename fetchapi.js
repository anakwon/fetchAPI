// In this challenge, the REST API contains information about a collection of articles. Given a username and a limit value, the goal is to return articles authored by the user with the given username, ordered by the number of comments they have and limited to the first ones in that order by the given limit value.
// To access the collection of users perform HTTP GET request to https://jsonmock.hackerrank.com/api/articles?author=<username>&page=<pageNumber> where <username> is the username of the author of articles to search for and <pageNumber> is an integer that denotes the page of results to return.
// For example, a GET request to https://jsonmock.hackerrank.com/api/articles?author=epaga&page=1 will return the first page of the collection of articles authored by the user with username "epaga". Pages are numbered from 1.
// The response to such request is a JSON with the following 5 fields:

// page: the current page of the results
// per_page: the maximum number of users returned per page.
// total: the total number of users on all pages of the result.
// total_pages: the total number of pages with results.
// data: an array of objects containing users returned on the requested page

// Each user record has the following schema:
// title: the title of the article, can be null
// url: the URL of the article
// author: the username of the author of the article
// num_comments: the number of comments the article has, can be null which means it has 0 comments
// story_id: identifier of the story related to the article, can be null
// story_title: the title of the story related to the article, can be null
// story_url: the URL of the story related to the article, can be null
// parent_id: identifier of the parent of the article, can be null
// created_at: the date and time when the record was created
 
// When considering an article:
// If both the title and the story title of an article are null, then ignore the article.
// Otherwise:
//     If the title is not null, the name of the article is title.
//     If the title is null, the name of the article is story_title.
 
// Given username and limit values, return an array of names of articles authored by the user with the given username, ordered by the number of comments they have, descending. Limit the list to limit records. If multiple articles have the same number of comments, order them ascending by name.
// Function Description

// Complete the function topArticles in the editor below. 
// topArticles has the following parameter(s):
//     string username: the username of the author
//     int limit: the maximum number of articles to return

// Returns:
//     string[]: the names of articles retrieved, selected and ordered as described

// STDIN       Function
// -----       --------
// olalonde →  username = 'olalonde'
// 1        →  limit = 1
// Sample Output

// Show HN: This up votes itself
// Explanation

// We are interested in the top 1 articles authored by the user with username olalonde. There are 2 articles authored by olalonde available in the API response:

 

// title: null, story_title: Guacamole – A clientless remote desktop gateway, num_comments: null
// title: Show HN: This up votes itself, story_title: null, num_comments: 83
 

// The name of the first article is its story title because its title is null, while the name of the second article is its title. The number of comments in the first article is null, so we treat is as having 0 comments. When those articles are ordered ascending by comment count, only the second article appears in the top limit = 1. Therefore, the name of the second article is the only one appearing in the result.

/*
 * Complete the 'topArticles' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING username
 *  2. INTEGER limit
 */

function topArticles(username, limit) {

    //import reqeust and json

    //set variable
    username = [];
    limit = 1;
    
    totalPages = 1;


    // while limit <= totalPages {
    // make request for each page

    fetch('https://jsonmock.hackerrank.com/api/articles?author=olalonde&page=1')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    //set totalPages value


    // get data for each user

    // check if submission coumnt is greater than threasdhol

    /// return usernames





















