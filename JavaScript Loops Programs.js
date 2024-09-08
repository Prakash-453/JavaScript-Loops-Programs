// For Loop:
1. Write a program to print the square of each number from 1 to 10.
Test case: Input: 1 - 10, Output: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100

PROGRAM:
for (i = 1; i <= 10; i++) {
    console.log(i * i)
}

OUTPUT:
1
4
9
16
25
36
49
64
81
100

2. Write a program to find the sum of all numbers from 1 to 20 that are divisible by 3.
Test case: Input: 1 - 20, Output: 63(3 + 6 + 9 + 12 + 15 + 18)

PROGRAM:
result = 0
for (i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        result += i
    }
}
console.log(`The Sum of 1 to 20 Numbers that are divisible by 3 is : ${result}`)

OUTPUT: 
The Sum of 1 to 20 Numbers that are divisible by 3 is: 63

3. Write a program to print the cube of each number from 1 to 15.
Test case: Input: 1 - 15, Output: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375

PROGRAM:
for (i = 1; i <= 15; i++) {
    console.log(i * i * i)
}

OUTPUT:
1
8
27
64
125
216
343
512
729
1000
1331
1728
2197
2744
3375

// While Loop:
1. Write a program to print the numbers from 1 to 20, but skip printing numbers that are divisible by 5.
Test case: Input: 1 - 20, Output: 1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19

PROGRAM:
i = 1
while (i <= 20) {
    if (i % 5 == 0) {
        i++
        continue
    }
    console.log(i)
    i++
}

OUTPUT:
1
2
3
4
6
7
8
9
11
12
13
14
16
17
18
19

2. Write a program to find the sum of all numbers from 1
     to 30 that are divisible by 4.
    - Test case: Input: 1 - 30, Output: 112(4 + 8 + 12 + 16 + 20 + 24 + 28)

PROGRAM:
i = 1
sum = 0
while (i <= 30) {
    if (i % 4 == 0) {
        sum += i
    }
    i++
}
console.log(`The Sum of 1 to 30 Numbers that are divisible by 4 is : ${sum}`)


OUTPUT: 
The Sum of 1 to 30 Numbers that are divisible by 4 is: 112


3. Write a program to print the numbers from 50 to 1 in reverse order, but only print numbers that are divisible by 3 Test case: Input: 50, Output: 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3

PROGRAM:
i = 50
while (i >= 1) {
    if (i % 3 == 0) {
        console.log(i)
    }
    i--
}

OUTPUT:
48
45
42
39
36
33
30
27
24
21
18
15
12
9
6
3

// Do - While Loop:
1. Write a program to print the numbers from 10 to 1 in reverse order.
Test case: Input: 10, Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

PROGRAM:
i = 10
do {
    console.log(i)
    i--
}
while (i >= 1)

OUTPUT:
10
9
8
7
6
5
4
3
2
1



2. Write a program to find the product of all numbers from 1 to 12.
Test case: Input: 1 - 12, Output: 479001600(1_2_3 4 5 6 7 8 9_10_11 * 12)

PROGRAM:
i = 1
product = 1
do {
    product *= i
    i++
}
while (i <= 12)
console.log(`Product of 1 to 10 numbers is : ${product}`)

OUTPUT: 
Product of 1 to 10 numbers is: 479001600

3. Write a program to print the numbers from 20 to 1 in
    reverse order, but only print every other number. 
Test case: Input: 20, Output: 20, 18, 16, 14, 12, 10, 8, 6, 4, 2
PROGRAM:
i = 20
do {
    console.log(i)
    i--
    if (i % 2 !== 0) {
        i--
        continue
    }
}
while (i >= 1)

OUTPUT:
20
18
16
14
12
10
8
6
4
2



