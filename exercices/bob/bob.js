//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let msg = "";
  var regex = /[A-Z]/;
  msg = message.trim()

  if (msg === undefined || msg === null || msg === "")
    return "Fine. Be that way!"
  else if (msg[msg.length - 1] == "?" && msg == msg.toUpperCase() && regex.test(msg))
    return "Calm down, I know what I'm doing!"
  else if (msg[msg.length - 1] == "?")
    return "Sure."
  else if (msg == msg.toUpperCase() && regex.test(msg))
    return "Whoa, chill out!"

  else
    return "Whatever."
};
