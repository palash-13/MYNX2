import React, {useState } from "react";
import startListening from "./helpers/startlistening";
import { getFormattedDate } from "./helpers/getFormattedDate";


const SpeechRecognitionComponent = () => {
  const [transcript, setTranscript] = useState("");
  const [resp, setResp] = useState("");
  const speechSynthesisAvailable = "speechSynthesis" in window;
  const speechSynthesis = speechSynthesisAvailable
    ? window.speechSynthesis
    : null;
  const { SpeechSynthesisUtterance } = window;
  const authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6IjE1ZDkyMDYwLS1mZDUyLS00MzliLWEzOGMtNTM2OGQxNWFiMWJjIiwiaWF0IjoxNzA2NDMyOTIxLCJleHAiOjE3MDY0NDAxMjF9.-3pwqdxmFwHid3ok_WRFM1kDzB5FRE4qjYzHt4hfPDpuhu1KqzIdWocHnpDMbJ6YE4Bz8EHYVg2snN-uXnJSFg';
  const speechutterance = new SpeechSynthesisUtterance();
  const currentDate = getFormattedDate();
  const utterSpeech =(speechutterance,updatedText)=>{
    const voices = speechSynthesis.getVoices();
    function isFemaleVoice(voice) {
      return voice.name.includes("Female");
    }

    const femaleVoice = voices.find(isFemaleVoice);

    if (femaleVoice) {
      speechutterance.voice = femaleVoice;
      speechutterance.lang = femaleVoice.lang;
      speechutterance.volume = 1;
      speechutterance.pitch = 1;
      speechutterance.rate = 1;
    } else {
      console.warn("Female voice not found. Using default voice.");
    }
    speechutterance.text = updatedText;
    setResp(updatedText);
  }
  const fetchData = (apiUrl, callback) => {
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not okay");
      }
      return response.text();
    })
    .then((longValue) => {
      const integerValue = parseInt(longValue, 10);
      if (isNaN(integerValue)) {
        throw new Error("Value is not a valid integer");
      }
  
      speechutterance.text = `The Value is: ${integerValue}`;
      const updatedText = callback(integerValue);
      utterSpeech(speechutterance, updatedText);
      speechSynthesis.speak(speechutterance);
    })
    .catch((error) => {
      console.error("There was an error with this request:", error);
    });
  };
  const getClinical = () => {
  const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfAppointment/${currentDate}`;
  fetchData(apiUrl, (integerValue) => {
    return `Today, the clinic have a total of ${integerValue} appointment`;
  });
  };
  const getRescheduled = () => {
    const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/${currentDate}`;
    fetchData(apiUrl, (integerValue) => {
      return `today ${integerValue} appointments got reschedule`;
    });
  };
  const getNoShow = () => {
    const apiUrl =
     `http://52.14.102.183:8096/reporting/getCountOfNoShowAppointment/${currentDate}`;
     fetchData(apiUrl, (integerValue) => {
      return `Today there were ${integerValue} no show appointments`;
    });
  };
  const getCancelled = () => {
    const apiUrl =
      `http://52.14.102.183:8096/reporting/getCountOfCancelledAppointment/${currentDate}`;
      fetchData(apiUrl, (integerValue) => {
        return `The ${integerValue} appointments got cancelled`;
      });
  };
  const getDoctorCancelled = (wordsAfterDoctor) => {
    const apiUrlProviders =
      "http://52.14.102.183:8096/reporting/getProvidersMap";
    fetch(apiUrlProviders, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json(); 
      })
      .then((arrayFromJSON) => {
        const nameToFind = wordsAfterDoctor;
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            const providerWithoutSpaces = obj[key].split('').filter(e => e.trim().length).join('');
            
            const providerToFind = valueToFind.split('').filter(e => e.trim().length).join('');
            if (providerWithoutSpaces.toLowerCase() === providerToFind.toLowerCase() ) {
              
              return key;
            }
          }
          return null;
        };
        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        if (providerid) {
          const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfCancelledAppointmentByProviderId/${providerid}/${currentDate}`;
          fetchData(apiUrl, (integerValue) => {
            return `Today for doctor ${wordsAfterDoctor} has ${integerValue} appointments got cancelled`;
          });
        }
      });
  };
  const getDoctorRescheduled = (wordsAfterDoctor) => {
    const apiUrlProviders =
      "http://52.14.102.183:8096/reporting/getProvidersMap";
    fetch(apiUrlProviders, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json(); 
      })
      .then((arrayFromJSON) => {
        const nameToFind = wordsAfterDoctor;
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            const providerWithoutSpaces = obj[key].split('').filter(e => e.trim().length).join('');
            
            const providerToFind = valueToFind.split('').filter(e => e.trim().length).join('');
            if (providerWithoutSpaces.toLowerCase() === providerToFind.toLowerCase() ) {
              
              return key;
            }
          }
          return null;
        };

        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        if (providerid) {
          const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/${providerid}/${currentDate}`;
          fetchData(apiUrl, (integerValue) => {
            return `Today, the clinic have a total of ${integerValue} appointment`;
          });
        }
      });
  };
  const getDoctorNoShow = (wordsAfterDoctor) => {
    const apiUrlProviders =
      "http://52.14.102.183:8096/reporting/getProvidersMap";
    fetch(apiUrlProviders, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json(); 
      })
      .then((arrayFromJSON) => {
        const nameToFind = wordsAfterDoctor;
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            
            const providerWithoutSpaces = obj[key].split('').filter(e => e.trim().length).join('');
            
            const providerToFind = valueToFind.split('').filter(e => e.trim().length).join('');
            if (providerWithoutSpaces.toLowerCase() === providerToFind.toLowerCase() ) {
              
              return key;
            }
          }
          return null;
        };
        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        if (providerid) {
          const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfNoShowAppointment/${providerid}/${currentDate}`;
          fetchData(apiUrl, (integerValue) => {
            return `today for ${wordsAfterDoctor} has ${integerValue} no show`;
          });
        }
      });
  };
  const handleSpeak = async (word, voiceIndex = 0) => {
    if (!speechSynthesis) {
      console.error("Speech synthesis is not available in this browser.");
      return;
    }
    const speechutterance = new SpeechSynthesisUtterance();
    const voices = speechSynthesis.getVoices();

    function isPreferredVoice(voices) {
      return voices.lang === "en-US";
    }
    function updateSpeechUtterance() {
      const voices = speechSynthesis.getVoices();
      const preferredVoice = voices.find(isPreferredVoice);

      if (preferredVoice) {
        speechutterance.voices = preferredVoice;
        speechutterance.lang = "en-US";
        speechutterance.volume = 1;
        speechutterance.pitch = 1;
        speechutterance.rate = 1;
      } else {
        console.warn("Preferred voice not found.");
      }
    }

    if (voices.length > voiceIndex) {
      speechutterance.voice = voices[voiceIndex];
      function extractWordsAfterKeyword(word, keyword) {
        const keywordIndex = word.toLowerCase().indexOf(keyword);
        
        if (keywordIndex !== -1) {
          const wordsAfterKeyword = word.substring(keywordIndex + keyword.length).trim();
          return wordsAfterKeyword;
        } else {
          return null; 
        }
      }
      if (
        word.toLowerCase().includes("page") &&
        word.toLowerCase().includes("ap")
      ) {
        speechutterance.text = "Kindly utter the in proper speech";
      } else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("clinic")
      ) {
      getClinical();
      } else if (
        word.toLowerCase().includes("today") &&
        word.toLowerCase().includes("reschedule")
      ) {
        getRescheduled();
      } else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("cancelled") &&
        word.toLowerCase().includes("doctor")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "doctor");
   
        if (wordsAfterDoctor) {
        
          getDoctorCancelled(wordsAfterDoctor);
        }
      }
      else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("cancelled") &&
        word.toLowerCase().includes("dr")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "dr");
   
        if (wordsAfterDoctor) {
        
          getDoctorCancelled(wordsAfterDoctor);
        }
      }
       else if (
        word.toLowerCase().includes("no") &&
        word.toLowerCase().includes("show")&&word.toLowerCase().includes("appointment")
      ) {
        getNoShow();////////
      }
       else if (
        word.toLowerCase().includes("cancelled") &&
        word.toLowerCase().includes("today")
      ) {
        getCancelled();
      } else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("reschedule")&&
        word.toLowerCase().includes("doctor")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "doctor");
        if (wordsAfterDoctor) {
          getDoctorRescheduled(wordsAfterDoctor);
        }
      }
      else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("reschedule")&&
        word.toLowerCase().includes("dr")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "dr");
   
        if (wordsAfterDoctor) {
        
          getDoctorRescheduled(wordsAfterDoctor);
        }
      }
       else if (
        word.toLowerCase().includes("no") && word.toLowerCase().includes("show")
        && word.toLowerCase().includes("doctor")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "doctor");
   
        if (wordsAfterDoctor) {
        
          getDoctorNoShow(wordsAfterDoctor);
        }
        // callApiAndGetInteger6();
      }
      else if (
        word.toLowerCase().includes("no") && word.toLowerCase().includes("show")
        && word.toLowerCase().includes("dr")
      ) {
        const wordsAfterDoctor = extractWordsAfterKeyword(word, "dr");
        
        if (wordsAfterDoctor) {
         
          getDoctorNoShow(wordsAfterDoctor);
        }
        // callApiAndGetInteger6();
      }
      else if (
        word.toLowerCase().includes("appointments") &&
        word.toLowerCase().includes("today")
      ) {
        speechutterance.text = " You have 0 appointments got today.";
      }
    }
    updateSpeechUtterance();
    setResp(speechutterance.text);
    speechSynthesis.speak(speechutterance);
    speechSynthesis.addEventListener("voiceschanged", updateSpeechUtterance);
  };
  return (
    <div>
      Transcript:
      <p className="font-bold tracking-widest my-5">{transcript}</p>
      <button
        className="bg-blue-300 px-2 py-2 border border-blue-800 hover:bg-blue-500 hover:text-white hover:border-transparent rounded"
        onClick={() => {
          startListening({handleSpeak, setTranscript });
        }}
      >
        Start Listening
      </button>
      <p className="font-bold tracking-widest my-5">{resp}</p>
      <br />
    </div>
  );
};
export default SpeechRecognitionComponent;
