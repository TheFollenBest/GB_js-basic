'use strict';

// Exercise 1
function Exercise_1() {
    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(i + ' это ноль');
        } else if (i % 2 == 0) {
            console.log(i + ' четное число');
        } else {
            console.log(i + ' нечетное число');
        }
    }
}
Exercise_1();

// Exercise 2
function Exercise_2() {
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [{
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };

    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}
Exercise_2();

// Exercise 3
function Exercise_3() {
    const products = [{
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach(element => {
        element.price = element.price - element.price * 0.15
    })

    console.log(products);
}
Exercise_3();

// Exercise 4
function Exercise_4() {
    const products = [{
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const productsPhotos = products.filter(element => 'photos' in element && element.photos != ''); // или 'photos' in element && element.photos.length > 0
    console.log(productsPhotos);

    const productsPrice = products.sort(function(prod1, prod2){
        return prod1.price - prod2.price;
    })
    console.log(productsPrice);
}
Exercise_4();

// Exercise 6
function Exercise_6() {
    for(let i = 'x'; i.length <= 20; i += 'x'){
        console.log(i);
    }
}
Exercise_6();