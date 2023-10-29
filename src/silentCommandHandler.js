const silentCard = require("./adaptiveCards/silentCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class SilentCommandHandler {
  triggerPatterns = "silent";

  async handleCommandReceived(context, message){
    //verify the command arguments received from the client
    console.log(`Silenced Message: ${message.text}`);

    // trim 'silent' from the message
    var trimmedMessage = trimMessage(message);

    // render the silentCommand adaptive card
    const cardData = {
      title: "A student asked:",
      body: trimmedMessage,
    };

    const cardJson = AdaptiveCards.declare(silentCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

// Methods

// Removes the 'silent' command from the message
function trimMessage(message){
  return message.text.slice(6);
}

// Exports
module.exports = {
  SilentCommandHandler,
}