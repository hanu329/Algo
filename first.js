

  var str = "Hello, Welocome to VNAITSERVICES";
  function fun(str) {
    let c = 0;
    let res = "";
    let obj = {};
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
      count = 1;

      if (res.split("").includes(str[i]) == true) {
        continue;
      } else {
        for (let j = i + 1; j < str.length; j++) {
          if (str[i] == str[j] && str[j] != " ") {
            count++;
            if (count == 2) {
              c++;
              res += str[i];
            }
            obj[str[i]] = count;
            res += str[i];
            c++;
          }
        }
      }
    }
    console.log(c, res, obj);
  }

  fun(str);

  const funShort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let t = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[t] > arr[j]) {
          t = j;
        }
      }
      //swap arr[i],arr[t]
      if (t != i) {
        let v = arr[t];
        arr[t] = arr[i];
        arr[i] = v;
      }
    }
    console.log(arr);
  };
  let arr = [7, 3, 2, 5, 4, 1];
  funShort(arr);

  //     1
  //   1 2 1
  // 1 2 3 2 1
  function func2(){

    let n = 3;
    let m = 5;
    for (let i = 1; i <= n; i++) {
      let b = "";
      let f = 0;
      for (let j = 1; j < m - i; j++) {
        b += "  ";
      }
      for (let k = m - i; k < m; k++) {
        f++;
        b += f + " ";
      }
      for (let l = m; l < 2 * m; l++) {
        f--;
        if (f > 0) {
          b += f + " ";
        }
      }
      console.log(b);
    }
  }


// * * * * *
  //  * * * *
  //   * * *
  //  * * * *
  // * * * * *

  function func3(){

    let n = 6;
    let m = 6;
    function pat(n, m) {
      for (let i = 1; i <= n; i++) {
        let s = "";
        if (i <= Math.ceil(n / 2)) {
          for (let j = 1; j < i; j++) {
            s += " ";
          }
          for (let k = i; k <= m; k++) {
            s += "* ";
          }
        } else {
          for (let j = 1; j < m - i + 1; j++) {
            s += " ";
          }
          for (let j = m - i; j < m; j++) {
            s += "* ";
          }
        }
  
        console.log(s);
      }
    }
  }
 
  pat(10, 10);

  //     1
  //   1 2 1
  // 1 2 3 2 1
  // 1 2 3 4 3 2 1
  //   1 2 3 2 1
  //     1 2 1
  //       1
function fun3(){
  let n = 4;
  let m = 5;
  for (let i = 1; i <= n; i++) {
    let b = "";
    let f = 0;
    for (let j = 1; j < m - i; j++) {
      b += "  ";
    }
    for (let k = m - i; k < m; k++) {
      f++;
      b += f + " ";
    }
    for (let l = m; l < 2 * m; l++) {
      f--;
      if (f > 0) {
        b += f + " ";
      }
    }
    console.log(b);
  }

  for (let i = n + 1; i < 2 * n; i++) {
    let b = "";
    let f = 0;
    for (let j = 1; j < i - n + 1; j++) {
      b += "  ";
    }
    for (let k = i - n; k < m - 1; k++) {
      f++;
      b += f + " ";
    }
    for (let l = m; l < 2 * m; l++) {
      f--;
      if (f > 0) {
        b += f + " ";
      }
    }
    console.log(b);
  }
  

}

  