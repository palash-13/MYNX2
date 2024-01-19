
const startListening = ({setTranscript,handleSpeak}) => {
    let recognition = null;
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
        recognition.onresult = (event) => {
        const recognizedTranscript = event.results[0][0].transcript;
        setTranscript(recognizedTranscript);
        let voiceIndex =2 ; 
        handleSpeak(recognizedTranscript, voiceIndex);
      };
    }
     else {
      console.log("Speech recognition not supported in this browser.");
    }
    if (recognition) {
      recognition.start();
    }
  };

  export default startListening;