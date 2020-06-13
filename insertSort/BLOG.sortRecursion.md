```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

Example of Given Array `arr = [8,6,9,3,1,90,4,89]`
How the recursion works 
1.   `   `[8,6,9,3,1,90,4,89,100]`
2.    `[8,6,9,3,]`    `[1,90,4,89,100]`
3. `[8,6,]``[9,3,]`   `[1,90]`[4,89,100]`
4. `[6,8]` `[3,9]`    `[1,90]`  `[4]`  `[89,100]` 
5. `[3,6,8,9]`         `[1,90]`   `[4,89,100]`
6.    `                 `[1,4,89,90,100]
7. All together `[1,3,4,6,8,9,89,90,100]`


  