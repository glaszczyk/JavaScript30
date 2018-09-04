// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

isOld = (person, age) => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= age;
}

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const nineteenOrMore = people.some(person => isOld(person, 19));
console.log(nineteenOrMore ? 'At least one person is 19+' : 'No 19+');

// Array.prototype.every() // is everyone 19 or older?
const everyoneIsNineteen = people.every(person => isOld(person, 19))
console.log(everyoneIsNineteen ? 'Everyone is 19+' : 'Not all are 19+');

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
result = comments.find(comment => comment.id === 823423);
console.log(result);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
findCommentIndex = (commentId) => 
    comments.findIndex(({id}) => id === commentId);

commentToRemove = findCommentIndex(823423);
newComments = [...comments.slice(0, commentToRemove), ...comments.slice(commentToRemove+1, comments.length)];
console.log(newComments);