// 18)// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Пиши код ниже этой строки
//     let totalPrice = pricePerDroid * orderedQuantity;
    
//     if (totalPrice > customerCredits) 
//     {message = "Недостаточно средств на счету!";}
    
//     else {customerCredits -= totalPrice;
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`
//          }
    
//     // Пиши код выше этой строки
//     console.log(message);
//     return message;
//   }
//   makeTransaction(3000, 5, 23000);
//   makeTransaction(1000, 3, 15000);
//   makeTransaction(5000, 10, 8000);
//   makeTransaction(2000, 8, 10000);
//   makeTransaction(500, 10, 500);

// 2-6 Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';
// console.log(fruits);

//2-7 Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// 2-8 Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex =  fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


// console.log(lastElementIndex);
// console.log(lastElement);


//??? 2-9 Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.
// function getExtremeElements(array) {

//     return [array[0], array[array.length-1]];

//   }


//   getExtremeElements([1, 2, 3, 4, 5]);
//   getExtremeElements(['Земля', 'Марс', 'Венера']);
//   getExtremeElements(['яблоко', 'персик', 'груша', 'банан']);



// 2-10Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
//     words = message.split(delimeter);
    
//     console.log(words);
//     // Пиши код выше этой строки
//     return words;
//   }

//   splitMessage('Манго спешит на поезд', ' ');
//   splitMessage('Манго', '');
//   splitMessage('лучшее_за_неделю', '_');


// 2-11 Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
//     let madeMessageArroy = message.split(" ");
//     let lengthMessage =  madeMessageArroy.length;
//     let total = lengthMessage * pricePerWord;
//     console.log(total);
//     return total;
  
//     // Пиши код выше этой строки
//   }

//   calculateEngravingPrice('JavaScript у меня в крови', 10);
//   calculateEngravingPrice('JavaScript у меня в крови', 20);
//   calculateEngravingPrice('Веб-разработка это творческая работа', 40);
//   calculateEngravingPrice('Веб-разработка это творческая работа', 20);


// 2-12 Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Пиши код ниже этой строки
//    string = array.join(delimeter);
   
//    console.log(string);
//     // Пиши код выше этой строки
//     return string;
//   }
  
//   makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' ');
//   makeStringFromArray(['М', 'а', 'н', 'г', 'о'], '');
//   makeStringFromArray(['лучшее', 'за', 'неделю'], '_');


// 2-13 Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
// function slugify(title) {
//     // Пиши код ниже этой строки
// //    const normalizeTitle = title.toLowerCase();
// //    const makeArray = normalizeTitle.split(" ");
// //    const makeStringWithDash = makeArray.join("-");

// //    return makeStringWithDash;
//    return title = title.toLowerCase().split(" ").join("-");
   
//     // Пиши код выше этой строки
//   }
//   console.log(slugify('Массивы для новичков'));
//   console.log(slugify('Английский для разработчика'));
//   console.log(slugify('Десять секретов JavaScript'));
//   console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));

// 2-15 Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку
// console.log(allClients);



// 2-16Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//     const newArray = firstArray.concat(secondArray);
//     const lengthNewArray = newArray.length;
//     if (lengthNewArray > maxLength) {return newArray.slice(0,maxLength)};
//     return newArray.slice();
    
//     // Пиши код выше этой строки
//   }
//   console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
//   console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
//   console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
//   console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));

// 2-17 Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно. Дополни тело функции так, чтобы она работала правильно.
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }


// 2-18 Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
// function calculateTotal(number) {
//     // Пиши код ниже этой строки
//   let totalAmount = 0;
//     for (let i = totalAmount; i <= number; i += 1) {
//     totalAmount += i;
//     }
//     return totalAmount;
      
//     // Пиши код выше этой строки
//   }
    
//     // Пиши код выше этой строки
  

// console.log(calculateTotal(1));
//   console.log(calculateTotal(3));
//   console.log(calculateTotal(7));
//   console.log(calculateTotal(18));
//   console.log(calculateTotal(24));
//   console.log(calculateTotal());  


// 2-19 Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }


// 2-20Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
   
//     total += order[i];}
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());


// ???2-21Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
// const newArroy = string.split(" ");
// let maxWord = '';
// for (let i = 0; i < newArroy.length; i += 1) {
//   if(newArroy[i].length > maxWord.length) {
//     maxWord = newArroy[i];
//   }
// }
//   return maxWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));


// 2-22Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1)
//   {numbers.push(i);}
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));



// 2-23 Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const newArray = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if(numbers[i] > value) {
//     newArray.push(numbers[i]);
//   }
// }
// return newArray;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// 2-24 Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
  
// }
// console.log(checkFruit('слива'));
// console.log(checkFruit('мандарин'));
// console.log(checkFruit('груша'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));


// 2-25Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// let newArray = [];
// for (let i = 0; i < array1.length; i += 1) {
//   if (array2.includes(array1[i])) {
//       newArray.push(array1[i])}
     
//   }
//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])) ;
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) ;
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



// 2-26Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const itemOrder of order) {
//     total += itemOrder;}
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));


// 2-27Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];
// for (const number of numbers) {
// if (number > value) {
//   filteredNumbers.push(number);
// }
// }


//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(ilterArray([12, 24, 8, 41, 76], 20));


// 2-28Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



// 2-29Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
// const newArray = [];

// for (let i = start; i <= end; i += 1) {
// if (i % 2 === 0) {newArray.push(i);}
// }
// return newArray;
  
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(etEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// 2-30Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


// 2-32 Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// function includes(array, value) {
//     // Пиши код ниже этой строки
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {return true;}
    
//   }
//   return false
  
    
//     // Пиши код выше этой строки
//   }
//   console.log(includes([1, 2, 3, 4, 5], 3));
//   console.log(includes([1, 2, 3, 4, 5], 17));
//   console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'));
//   console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));



// 3-4-41.Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   // Пиши код ниже этой строки
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[apartment.tags.length - 1];
//   // Пиши код выше этой строки
//   console.log(ownerName);
//   console.log(ownerPhone);
//   console.log(ownerEmail);
//   console.log(numberOfTags);
//   console.log(firstTag);
//   console.log(lastTag);



// 3-5-41Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment['rating'];
//   const aptDescr = apartment['descr'];
//   const aptPrice = apartment['price'];
//   const aptTags = apartment['tags'];
//   // Пиши код выше этой строки
//   console.log(aptRating);
//   console.log(aptDescr);
//   console.log(aptPrice);
//   console.log(aptTags);


// 3-6-41Дополни код обновив значения свойств объекта apartment:
// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
//   apartment.price = 5000;
//   apartment.rating = 4.7;
//   apartment.owner.name = 'Генри Сибола';
//   apartment.tags.push('trusted');
//   // Пиши код ниже этой строки


//   console.log(apartment.price);
//   console.log(apartment.rating);
//   console.log(apartment.owner.name);
//   console.log(apartment.tags);


// 3-7-41Добавь объекту apartment несколько новых свойств:
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.
// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4.7,
//     price: 5000,
//     tags: ['premium', 'promoted', 'top', 'trusted'],
//     owner: {
//       name: 'Генри Сибола',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };
//   // Пиши код ниже этой строки
//   apartment.area = 60;
//   apartment.rooms = 3;
//   apartment.location = {country: 'Ямайка', city: 'Кингстон'};

//     console.log(apartment);


// 3-8-41Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
// price,
// image,
// tags,


//   // Пиши код выше этой строки
// };
// console.log(product);


// 3-9-41 Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка 'henry.carter@aptmail.com', а значением свойства password - строка 'jqueryismyjam'.
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Пиши код выше этой строки
// };
// console.log(credentials);


// 3-10-41Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
// const apartment = {
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];

//   for (const key in apartment ) {
//     keys.push(key);
//     values.push(apartment[key]);  // Значение свойства с таким ключом пушится в массив вєлью
    

//   }

//   // Пиши код ниже этой строки
//   console.log(keys);
//   console.log(values);
  


// 3-11-41Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Пиши код выше этой строки
// }
//   console.log(keys);
//   console.log(values);



// 3-12-41Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
// for (const key in object) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }
//   // Пиши код выше этой строки
//   return propCount;
// }
// // console.log(object);
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));


//??? 3-13-41Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, 
// и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const value of keys) {
//   values.push(apartment[value]);
// }

// console.log(values);
// как перебор фор ин знает что я хочу перебрать именно объект апартмент, а не какойто другой? по имени переменной keys?



// 3-14-41Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.
// альтернатива решения 12й задачи.
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   propCount = Object.keys(object).length;

//   return propCount;
//   // Пиши код выше этой строки
// }
// // console.log(keysArray);
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));



// 3-15-41Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);


// 3-16-41Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
// где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//  Используй переменную totalSalary для хранения общей суммы зарплаты.
// Функция учитывает только собственные свойства объекта.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;

// for (const keys in salaries) {
// if (salaries.hasOwnProperty(keys)) {
//   totalSalary += salaries[keys]}
// }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// // 3-17-41 Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
//  а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const codeColor of colors) {
//   // console.log(codeColor);
//   // console.log(codeColor.hex);
//   hexColors.push(codeColor.hex);
//   rgbColors.push(codeColor.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// 3-18-41Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
// Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const subProducts of products) {
//   if (subProducts.name === productName) {
//     return subProducts.price;}
//   }
//   return null;
  
//   // Пиши код выше этой строки
// }
// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));



// 3-19-41Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. 
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
// const arroyValues = [];

// for (let subProducts of products) {
//   if (Object.keys(subProducts).includes(propName)) {
//   arroyValues.push(subProducts[propName]);
// }

// }
// return arroyValues;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));



// 3-20-41Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
// Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// for (const item of products) {
// if (item.name === productName) {
//   return item.price * item.quantity;
// }
// }
// return 0;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Сканер'));


// 3-21-41 Деструктизация
// Деструктуризация всегда находится в левой части операции присвоения.
//  Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. 
// Порядок объявления переменных в фигурных скобках не важен.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {yesterday, today, tomorrow} = highTemperatures;

// /* const yesterday = highTemperatures.yesterday; const today = highTemperatures.today;  const tomorrow = highTemperatures.tomorrow;*/

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);


// 3-22-41 В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. 
// Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.
//  Задай значение по умолчанию для icon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


// ????3-23-41Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией 
// деструктуризации свойств объекта highTemperatures. 
// Задай значение по умолчанию для highIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',} = highTemperatures;

// /* const highYesterday = highTemperatures.yesterday; const highToday = highTemperatures.today; const highTomorrow = highTemperatures.tomorrow; const highIcon = highTemperatures.icon; */

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// console.log(highTemperatures);

// ???? почему зараьотало без айкон?



// 3-24-41Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const {hex, rgb,} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);



// 3-25-41Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, 
// а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации 
// свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и 
// tomorrowIcon - строку 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'.
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки

// const {today: {high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, 
// tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},}= forecast;
// /*// const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;*/


// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);



// 3-26-41
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {

//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh},} = forecast;
  
//   /*// const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high; */

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));



// 3-27-41 SPREAD. 
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так,
//  чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);



// 3-28-41В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. 
// Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);



// 3-29-41В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. 
// Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки.
//  Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);



//???3-30-41
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   // const {text: textTask} = data;
// return {category, priority, completed, ...data};
// // ??? если поменять ...дата на первое место, то результат будет другой.
//   // Пиши код выше этой строки
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({ text: 'Купить хлеб' }));



// 3-31-41REST/Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
//  считала и возвращала их сумму.
// Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;
//   for (const number of args) {
//     total += number;
//    ;
//   }
//    return total
//   // Пиши код выше этой строки
// }

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));



// ???3-32-41Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так,
//  чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// Пиши код ниже этой строки
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//   	if (arg > args[0]) {
//  		total += arg;}
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));


//??? 3-33-41Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго,
//  которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.

// Пиши код ниже этой строки
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку
//  for(const arg of args) {
//    if (array.includes(arg)) {
//      matches.push(arg);
//    }
//  }
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));



// 3-34-41Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто
//  строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. 
// Возвращает строку 'Удаляем книгу <имя книги>', где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку 'Обновляем книгу <старое имя> на <новое имя>', где <старое имя> и <новое имя>
// это значения параметров oldName и newName соотвественно.
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };



// 3-35-41Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
//  Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент.
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//   const indexBook = this.books.indexOf(oldName);
//    this.books.splice(indexBook, 1, newName);
  
// 	  return this.books;
	
//     // Пиши код выше этой строки
//   },
// };
// console.log(bookShelf.updateBook('Мгла', 'Хроники подземелий'));
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна'));



// 3-36-41К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, 
// удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: []
//   // Пиши код выше этой строки
// };



// 3-37-41Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//     return this.potions;
//   }
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());



// 3-38-41Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
// return this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.addPotion('Невидимка'));
// console.log(atTheOldToad.addPotion('Зелье силы'));



// 3-39-41Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//       const index = this.potions.indexOf(potionName);
//       this.potions.splice(index, 1);
    
//     return this.potions;


//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.removePotion('Зелье скорости'));



// 3-40-41Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
//  в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const index = this.potions.indexOf(oldName);
//     this.potions.splice(index, 1, newName);
//     return this.potions;
//     // 🔥 Оставляем три пустые строки для студента
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Невидимка'));


// 3-41-41Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   // addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
//   addPotion(potionName) {
//     for (const potion of this.potions) {
//       if(potion.name === potionName.name) {
//         return `Зелье ${potionName} уже есть в инвентаре!`;
//       }
//       this.potions.push(potionName);
//       return this.potions
//     }
//   },

//   // removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     // for (const potion of this.potions) {
//     //   if (potion.name === potionName) {
//     //     const index = this.potions.indexOf(potion);
//     //     this.potions.splice(index, 1);
//     //     return this.potions;
//     //   }
//     //   return `Зелья ${potionName} нет в инвентаре!`;
    

//   },

//   // updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       console.log(potion);
//       if (potion.name === oldName) {
//         const index = this.potions.indexOf(potion);
//         const updatePotion = {...potion, name:newName};
//         this.potions.splice(index, 1, updatePotion);
//         return this.potion;

//       }
//     }

//       // for (i = 0; i < this.potions.length; i += 1) {
//       //   if (oldName === this.potions[i].name) {
//       //     console.log(this.potions[i].name);
//       //     this.potions[i].name === newName;
//       //     return this.potions;
//       //   }
//       //   return `Зелья ${oldName} нет в инвентаре!`;
//       // }


//     // for (const value of this.potions) {
//     //    value.name === oldName 
//     //    ? value.name === newName : 
//     //    `Зелья ${oldName} нет в инвентаре!`
//     //   }
//   },

//   // Пиши код выше этой строки
// };

// // console.table(atTheOldToad.getPotions());
// // console.table(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
// // console.table(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// // atTheOldToad.removePotion('Дыхание дракона'));
// // console.table(atTheOldToad.removePotion('Зелье скорости'));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));