function monthOfYear(monthNumber) {
    switch (monthNumber) {
      case 1:
        console.log(`Name of the Month ${monthNumber}= January`);
        break;
      case 2:
        console.log(`Name of the Month ${monthNumber}= February`);
        break;
      case 3:
        console.log(`Name of the Month ${monthNumber}= March`);
        break;
      case 4:
        console.log(`Name of the Month ${monthNumber}= April`);
        break;
      case 5:
        console.log(`Name of the Month ${monthNumber}= May`);
        break;
      case 6:
        console.log(`Name of the Month ${monthNumber}= June`);
        break;
      case 7:
        console.log(`Name of the Month ${monthNumber}= July`);
        break;
      case 8:
        console.log(`Name of the Month is ${monthNumber}= August`);
        break;
      case 9:
        console.log(`Name of the Month is ${monthNumber}= Sepetember`);
        break;
      case 10:
        console.log(`Name of the Month is ${monthNumber}= October`);
        break;
      case 11:
        console.log(`Name of the Month is ${monthNumber}= November`);
        break;
      case 12:
        console.log(`Name of the Month  ${monthNumber}= December`);
        break;
      default:
        console.log(`Invalid input----> Name of the Month is ${monthNumber}`);
        break;
    }
  }
  monthOfYear(0);
  monthOfYear(2);
  monthOfYear(5);
  monthOfYear(12);
  monthOfYear(15);
  monthOfYear(100);
  monthOfYear(null);
  monthOfYear(undefined);
  