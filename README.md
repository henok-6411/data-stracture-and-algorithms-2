# data-stracture-and-algorithms-2

# Insertion sort 
# Challenge Summary

```
 Pseudocode Need to be trace the Algorithm.  
 SelectionSort(int[] arr)
       DECLARE n <-- arr.Length;
       FOR i = 0; i to n - 1  
        DECLARE min <-- i;
        FOR j = i + 1 to n
            if (arr[j] < arr[min])
                min <-- j;

        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp; 
```

## Challenge Description

- I will describe in detail how the algorithm works. 


## Approach & Efficiency

- After knowing how sorted array look like, I spend time by looking examples and dive in to the solution of   my problem. 

## Solution
- trace 
  `sample Array = [20,17,7,11,9,21]`

 - To start , We will create a function name called selectionSort, that will take array as an argument.we will use nested loops to perform the sorting.

 - First step 
     we will iterate the given array by using for loop.While the iteration is happening we will assign the first index of the array in to variable name min. which is going to be `var min = arr[i]`. 
- Second step
     we will fire the second iteration or the second nested loop. The second loop is going to be started from the second index or next to the value of `arr[i]`.In order to help us visualize it, i will declare a variable.We will name the second loop called `arr[j]`.
- Third step
     While the second iteration is happening,we will add a condition by comparing the values of `arr[min]` and `arr[j]`.On ever comparison of the number, we will assign the smallest number to `arr[j]`. Now the `min = arr[j]`.
- Fourth step
     Before we return the sorted value of the array, we need to create a place holder for the values of `arr[j]`.we have to declare a variable name of temp. when we start of temp was equal to `arr[i]` or `arr[min]`.On the second iteration `arr[min]` become `arr[j]`. in order to return temp with all sorted values of `arr[j]`.we have to switch them values, `temp = arr[min]`.last but not list return `temp. [7,9,11,17,20,21]`.


![Insertion Sort]()



