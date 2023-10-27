const silentCard = require("./adaptiveCards/silentCommand.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class SilentCommandHandler {
  triggerPatterns = "silent";

  async handleCommandReceived(context, message){
    //verify the command arguments received from the client
    console.log(`Silenced Message: ${message.text}`);

    const cardData = {
      title: "Silent command is added!",
      body: "Congratulations! You have responded to silent command",
    };

    const cardJson = AdaptiveCards.declare(silentCard).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  SilentCommandHandler,
}