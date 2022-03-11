'use strict';

// ES5
function ES5() {
    // A
    function Post(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    Post.prototype.edit = function (text) {
        this.text = text;
    }

    const post1 = new Post('Паша', 'Хочу пиццу', new Date());
    console.log(post1);
    post1.edit('с сыром');
    console.log(post1);


    // B
    function AttachedPost(author, text, date) {
        Post.call(this, author, text, date);
        this.highlighted = false;
    }

    AttachedPost.prototype = Object.create(Post.prototype);
    AttachedPost.prototype.constructor = AttachedPost;

    AttachedPost.prototype.makeTextHighlighted = function () {
        this.highlighted = true;
    }

    const attached1 = new AttachedPost('Леша', 'Хочу2 пиццу2', new Date());
    console.log(attached1);
    attached1.makeTextHighlighted();
    attached1.edit('с сыром2');
    console.log(attached1);
}
ES5();


// ES6 (а)
function ES6_A() {
    class AttachedPost2 extends Post2 {
        constructor(author, text) {
            super(author, text);
            this.highlighted = false;
        }

        makeTextHighlighted() {
            this.highlighted = true;
        }
    }

    let attachedPost2 = new AttachedPost('Евгений', 'Лорем ...');

    attachedPost2.makeTextHighlighted();
    attachedPost2.edit();

    console.log(attachedPost2);
}
ES6_A();


// ES6 (б)
function ES6_B() {
class AttachedPost2 extends Post2 {
    constructor(author, text) {
        super(author, text);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let attachedPost2 = new AttachedPost('Евгений', 'Лорем ...');

attachedPost2.makeTextHighlighted();
attachedPost2.edit();

console.log(attachedPost2);
}
ES6_B();