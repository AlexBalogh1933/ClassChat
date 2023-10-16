const printMessageCard = require("./adaptiveCards/printMessageCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class AnonCommandHandler{
  triggerPatterns = "anon";

  async handleCommandReceived(context, message){
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message anonymously: ${message.text}`);

    // trim message
    var anonMessage = message.text.replace('anon', '');
    
    
    // render adaptive card for reply message
    const cardData = {
      title: "From Anonymous:",
      body: anonMessage,
    };

    const cardJson = AdaptiveCards.declare(printMessageCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  AnonCommandHandler,
};