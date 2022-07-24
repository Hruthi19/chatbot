class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello guys.");
      this.addMessageToState(message);
    };
  
    ViewCourses = () => {
      const message = this.createChatBotMessage(
        "We provide a wide variety of courses",
        {
          widget: "View Courses",
        }
      );
  
      this.addMessageToState(message);
    };

    OtherQuestions = () => {
      const message = this.createChatBotMessage(
        "Type your questions here ",
        
          <textarea>Contact Us</textarea>

        
      );
  
      this.addMessageToState(message);
    };

    checkProgress = () => {
      const message = this.createChatBotMessage(
        "We provide a wide variety of courses",
        {
          widget: "View Courses",
        }
      );
  
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  