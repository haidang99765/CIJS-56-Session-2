//class: như là bản thiết kế
//object: được tạo từ class, là 1 instance của class

// class NYC { // đây là class
//     name; //đây là các object
//     age;
//     sex; 
//     address;

//     constructor(name, age, sex, address) { 
//         console.log ('Đối tượng được khởi tạo với dữ liệu: ')
//         console.log (name, sex, age, address);
//         this.name = name; //this ở đây là đối tượng được khởi tạo, this ở đây trỏ vào các object ở trong class
//         this.age = age;
//         this.address = address;
//         this.sex = sex;
//     }

//     cheat() {
//         console.log ("Vừa đá xong 😁")
//     }

//     comeback() {
//         console.log ('Quay lại nhớ 😁')
//     }

// }

// let nyc1 = new NYC('A', '20', 'Female', 'TB'); //gọi new ... chính là gọi constructor, hay new NYC() kia chính là constructor, constructor kia cũng như 1 function
// nyc1.cheat(); //đây là gọi phương thức ở trong 1 object
// console.log (nyc1);






// class Crush {
//     name;
//     age;
//     appearance;
//     weight;
//     height;
//     address;

//     constructor (name, age, appearance, weight, height, address) {
//         this.name = name;
//         this.age = age;
//         this.appearance = appearance;
//         this.weight = weight;
//         this.height = height;
//         this.address = address;
//     }
// }
// console.log ('Đối tượng được khởi tạo: ');
// var crush1 = new Crush('L', '20', 'Xinh', '45kg', '1m59', 'NĐ');
// var crush2 = new Crush('N', '19', 'Xinh', '41kg', '1m45', 'NĐ'); //các giá trị ở đây sẽ truyền lần lượt vào từng object
// var crush3 = new Crush('Đ', '18', 'Xấu', '42kg', '1m50', 'HN');
// var crush4 = new Crush('H', '17', 'Xinh', '40kg', '1m44', 'HP');
// var crush5 = new Crush('B', '16', 'Xinh', '45kg', '1m49', 'NĐ');
// console.log (crush1);
// console.log (crush2);
// console.log (crush3);
// console.log (crush4);
// console.log (crush5);
// đây là ví dụ về Object và Class

// class Boy {
//     name;
//     age;
//     handsome;
//     f = [
//         'play game',
//         'music',
//         'girl',
//     ];
//     get favorite() { //getter phải đi liền với 1 thuộc tính (ở đây là thuộc tính "f")
//         return this.f;
//     }

//     set favorite(value) { //setter thì chỉ có duy nhất 1 tham số
//         this.f = value;
//     }
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     playGame() {
//         console.log ("Chơi game")
//     }
// }

// class GoodBoy extends Boy { //đây là class GoodBoy sẽ kế thừa những thuộc tính và phương thức của class Boy (với extends)
//     cooking;
//     constructor(name, age, cooking) {
//         super(name, age); //đây là gọi phương thức khởi tạo của thằng "cha"
//         delete this.handsome; //đây là xóa đi 1 thuộc tính mà không muốn kế thừa từ thằng "cha"
//         this.cooking = cooking;
//     }

//     takeCare() {
//         console.log("Quan tâm chăm sóc");
//     }
// }

// class BadBoy extends Boy {
//     rich;
//     constructor (name, age, rich) {
//         super (name, age);
//         this.rich = rich;
//     }
// }

// var Dang = new GoodBoy('Dang', 20, 'master chief');
// var BB1 = new BadBoy('BB1', 18, 'rich');
// var chinh = new Boy('Do Chinh', 23);
// Dang.playGame(); //playGame() nằm trong class Boy nên biến Dang nằm trong Goodboy sẽ kế thừa được
// console.log(Dang.favorite);
// Dang.favorite = ['phượt', 'đọc sách']; //setter và getter




// class Calculator {
//     static sum (a,b) {
//         return a + b;
//     }

//     static subtract (a,b) { //subtract () {} được gọi là phương thức
//         return a - b;
//     }

//     static multiply (a,b) {
//         return a * b;
//     }

//      power (a,b) {
//         return a ** b;
//     }
// }
// var c1 = new Calculator();
// c1.sum (1, 10); //nếu không dùng static thì phải làm như 2 dòng này
// Calculator.sum (1,10);
// Calculator.subtract (2, 3); 

//static mà đi với thuộc tính thì sẽ là thuộc tính của class, còn đi với phương thức thì sẽ là phương thức của class
//non-static mà đi với thuộc tính thì sẽ là thuộc tính của object, còn đi với phương thức thì sẽ là phương thức của object
//class ... là tên class, ...; là thuộc tính, ...() {} là phương thức

class Animal {
    name;
    leg;
    sound;
    constructor (name, leg, sound) {
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
}

class Reptile extends Animal {
    weight;
    length;
    constructor (name, leg, sound, weight, length) {
        super (name, leg, sound);
        this.weight = weight;
        this.length = length;
    }
    speak() {
        console.log ('Nó kêu: ' + this.sound);
    }
}

class Mammal extends Animal {
    furColor;
    constructor (name, leg, sound, furColor) {
        super (name, leg, sound);
        this.furColor = furColor;
    }
}

class Dog extends Mammal {
    constructor (furColor, name) {
        super (name, 4, 'gâu gâu', furColor);
    }
    bite() {
        console.log ("Ôi không, chó cắn")
    }
}

var Pitbull = new Dog('Lông vàng', 'Pitbull', '4 chân', 'Gâu gâu');
var thachsung = new Reptile('Thạch sùng', '4 chân', 'chành chạch', '20g', '20cm');
console.log (thachsung);
console.log (Pitbull);
Pitbull.bite();
thachsung.speak();