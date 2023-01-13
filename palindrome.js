function isPalindrome(str) {
  // transform str to lowercase and remove trailing and starting spaces
  let lowerCaseStr = str.toLowerCase().trim();  
  
  let validReverseStr = "";
  const regex = /[^a-zA-Z0-9]/g;

  // remove all non-alphanumeric chars
  const validStr = lowerCaseStr.replaceAll(regex, "");
  
  // build the reverse string
  for(let i = validStr.length - 1; i>=0; i--) {
    validReverseStr += validStr[i];
  }

  // compare strings
  if(validStr === validReverseStr){
      return true;
  } else{
      return false;
  }
}
