// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const regex = /^chatbot/i
  return regex.test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  const regex = /emoji[0-9]+/g
  const a = message.replace(regex, "")
  return a;
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  let rep = `Oops, it seems like I can't reach out to ${number}`
  //Crédit chat gpt + moi (Pret a d'éventuel question!!)
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/

  if (regex.test(number)) {
    rep = "Thanks! You can now download me to your phone."
  }
  return rep
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  //Aide de stackOverflow! https://stackoverflow.com/questions/11724663/regex-for-simple-urls (Simplifier)
  const regex = /[a-zA-Z]+\.[a-zA-Z]+/g;
  const site = userInput.match(regex)
  return site
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {

  //Aide de chatGPT mais je peux l'expliquer!!
  let name = fullName.replace(/([a-zA-Z]+), ([a-zA-Z]+)/, "Nice to meet you, $2 $1");
  return name

}
