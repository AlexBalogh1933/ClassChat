const silentCard = require("./adaptiveCards/silentCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");
var profanity = require('@2toad/profanity').profanity;

class SilentCommandHandler {
  triggerPatterns = "silent";

  async handleCommandReceived(context, message){
    // trim 'silent' from the message
    var sentMessage = trimMessage(message);

    //verify the command arguments received from the client
    console.log(`Silenced Message: ${sentMessage}`);

    // run the message through the @2toad profanity filter
    if(profanity.exists(sentMessage)){
      console.log(`Message contained probhibited text, request cancelled.`);
    }
    else{
      // render the silentCommand adaptive card
      const cardData = {
        title: "A student asked:",
        body: sentMessage,
      };

      const cardJson = AdaptiveCards.declare(silentCard).render(cardData);
      return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
    }
  
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