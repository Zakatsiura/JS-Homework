// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, true, 3, 4, 5, 6, 67, 8, 'string', 564];

for(let i = 0; i < 10; i++) {
    console.log(arr[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Elementary Mathematics',
    pageCount: 467,
    genre: 'science',
}

let book2 = {
    title: 'Higher Mathematics',
    pageCount: 544,
    genre: 'science',
}

let book3 = {
    title: 'The Expance',
    pageCount: 741,
    genre: 'sci-fy',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book4 = {
    title: 'Elementary Mathematics',
    pageCount: 467,
    genre: 'science',
    authors4: [author1 = {name: 'Author1', age: 'age1'}, author2 = {name: 'Author2', age: 'age2'}],
}

let book5 = {
    title: 'Higher Mathematics',
    pageCount: 544,
    genre: 'science',
    authors5: [author1 = {name: 'Author1', age: 'age1'}, author2 = {name: 'Author1', age: 'age2'}],

}

let book6 = {
    title: 'The Expance',
    pageCount: 741,
    genre: 'sci-fy',
    authors6: [author1 = {name: 'Author1', age: 'age1'}, author2 = {name: 'Author1', age: 'age2'}],

}
// console.log(book6.authors6[0].name)
// console.log(book5.authors5[1].age)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr1 = [
    user1 = {
        name: 'user1Name',
        username: 'user1Username',
        password: 1111,
    },
    user2 = {
        name: 'user2Name',
        username: 'user2Username',
        password: 2222,
    },
    user3 = {
        name: 'user3Name',
        username: 'user3Username',
        password: 3333,
    },
    user4 = {
        name: 'user4Name',
        username: 'user4Username',
        password: 4444,
    },
    user5 = {
        name: 'user5Name',
        username: 'user5Username',
        password: 5555,
    },
    user6 = {
        name: 'user6Name',
        username: 'user6Username',
        password: 6666,
    },
    user7 = {
        name: 'user7Name',
        username: 'user7Username',
        password: 7777,
    },
    user8 = {
        name: 'user8Name',
        username: 'user8Username',
        password: 8888,
    },
    user9 = {
        name: 'user9Name',
        username: 'user9Username',
        password: 9999,
    },
    user10 = {
        name: 'user10Name',
        username: 'user10Username',
        password: 1010,
    },
];

for(let j=0; j < 10; j++) {
    console.log(arr1[j].password)
}
