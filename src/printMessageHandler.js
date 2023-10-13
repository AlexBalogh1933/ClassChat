const printMessageCard = require("./adaptiveCards/printMessageCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class PrintMessageCommandHandler {
  triggerPatterns = "printMessage";

  async handleCommandReceived(context, message) {
    // verify the command arguments which are received from the client if needed.
    console.log(`App received message: ${message.text}`);

    // do something to process your command and return message activity as the response

    // render your adaptive card for reply message
    const cardData = {
      title: "Here is your printed message",
      body: "Message: " + message.text,
    };

    const cardJson = AdaptiveCards.declare(printMessageCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
    PrintMessageCommandHandler,
};