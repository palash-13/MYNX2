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
  const authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6IjE1ZDkyMDYwLS1mZDUyLS00MzliLWEzOGMtNTM2OGQxNWFiMWJjIiwiaWF0IjoxNzA2MDExNzU1LCJleHAiOjE3MDYwMTg5NTV9.N-yE8ABdQYRB8fecK4hHKQ8FfdfLM2WdfzBa1FmDZNzgIR55H1geRN5zbUv1ho4f0VwgVBhwE3lXzQhJtZX49g';
  const updateSpeechUtterance0 = (speechutterance, integerValue) => {
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
    const updatedText = `Today, the clinic have a total of ${integerValue} appointment`;
    speechutterance.text = updatedText;
    setResp(updatedText);
  };
  const updateSpeechUtterance1 = (speechutterance, integerValue) => {
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
    const updatedText = `today ${integerValue} got reschedule`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;
    // Set the response in the state
    setResp(updatedText);
  };
  const updateSpeechUtterance2 = (speechutterance, integerValue) => {
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
    const updatedText = `The ${integerValue} appointments got cancelled`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;
    // Set the response in the state
    setResp(updatedText);
  };
  const updateSpeechUtterance3 = (speechutterance, integerValue) => {
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
    const updatedText = `Today there were ${integerValue} no show appointments`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;

    // Set the response in the state
    setResp(updatedText);
  };
  const updateSpeechUtterance = (speechutterance, integerValue) => {
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
    const updatedText = `Today for doctor vb raj ${integerValue} appointments got cancelled`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;
    // Set the response in the state
    setResp(updatedText);
  };
  const updateSpeechUtterance5 = (speechutterance, integerValue) => {
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
    const updatedText = `Today for doctor jacquline rush ${integerValue} got reschedule`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;
    // Set the response in the state
    setResp(updatedText);
  };
  const updateSpeechUtterance6 = (speechutterance, integerValue) => {
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
    const updatedText = `today for doc jahid niaz has ${integerValue} no show`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;
    // Set the response in the state
    setResp(updatedText);
  };
  const callApiAndGetInteger0 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const currentDate = getFormattedDate();
    const apiUrl =
      `http://52.14.102.183:8096/reporting/getCountOfAppointment/${currentDate}`;
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

        if (integerValue > 10) {
          speechutterance.text = `The Value is: ${integerValue}`;
        } else {
          speechutterance.text = `The Value is: ${integerValue}`;
        }
        updateSpeechUtterance0(speechutterance, integerValue);
        speechSynthesis.speak(speechutterance);
      })
      .catch((error) => {
        console.error("There was an error with this request:", error);
      });
  };
  const callApiAndGetInteger1 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const currentDate = getFormattedDate();
    const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/${currentDate}`;
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

        if (integerValue > 10) {
          speechutterance.text = `The Value is: ${integerValue}`;
        } else {
          speechutterance.text = `The Value is: ${integerValue}`;
        }
        updateSpeechUtterance1(speechutterance, integerValue);
        speechSynthesis.speak(speechutterance);
      })
      .catch((error) => {
        console.error("There was an error with this request:", error);
      });
  };

  const callApiAndGetInteger2 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const currentDate = getFormattedDate();
    const apiUrl =
      `http://52.14.102.183:8096/reporting/getCountOfAppointment/${currentDate}`;

    // const authToken =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6IjE1ZDkyMDYwLS1mZDUyLS00MzliLWEzOGMtNTM2OGQxNWFiMWJjIiwiaWF0IjoxNzA1Njc4NzU3LCJleHAiOjE3MDU2ODU5NTd9.s3pyaOXmkMBFAFCR0CwC4QEUMGDndOY01xoXwQyxIM3mbUUn1U0g11-6ReneF0iZf0QfmTdGqlW7-VuQFQjcNg";

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

        if (integerValue > 10) {
          speechutterance.text = `The Value is: ${integerValue}`;
        } else {
          speechutterance.text = `The Value is: ${integerValue}`;
        }
        updateSpeechUtterance2(speechutterance, integerValue);
        speechSynthesis.speak(speechutterance);
      })
      .catch((error) => {
        console.error("There was an error with this request:", error);
      });
  };
  const callApiAndGetInteger3 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const currentDate = getFormattedDate();
    const apiUrl =
     `http://52.14.102.183:8096/reporting/getCountOfNoShowAppointment/${currentDate}`;
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

        if (integerValue > 10) {
          speechutterance.text = `The Value is: ${integerValue}`;
        } else {
          speechutterance.text = `The Value is: ${integerValue}`;
        }
        updateSpeechUtterance3(speechutterance, integerValue);
        speechSynthesis.speak(speechutterance);
      })
      .catch((error) => {
        console.error("There was an error with this request:", error);
      });
  };
  const callApiAndGetInteger4 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const currentDate = getFormattedDate();
    const apiUrl =
      `http://52.14.102.183:8096/reporting/getCountOfCancelledAppointment/${currentDate}`;
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

        if (integerValue > 10) {
          speechutterance.text = `The Value is: ${integerValue}`;
        } else {
          speechutterance.text = `The Value is: ${integerValue}`;
        }
        updateSpeechUtterance2(speechutterance, integerValue);
        speechSynthesis.speak(speechutterance);
      })
      .catch((error) => {
        console.error("There was an error with this request:", error);
      });
  };
  const callApiAndGetInteger = () => {
    const speechUtterance = new SpeechSynthesisUtterance();
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
        return response.json(); // Use .json() to extract JSON data from the response
      })
      .then((arrayFromJSON) => {
        // Now arrayFromJSON contains the parsed JSON data
        const nameToFind = "VB Raj";
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            console.log(arrayFromJSON[key]);
            if (obj[key] === valueToFind) {
              return key;
            }
          }
          return null;
        };

        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        console.log(providerid);

        console.log(`This is a provider id ${providerid}`);
        if (providerid) {
          console.log(providerid);
          const currentDate = getFormattedDate();
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfCancelledAppointmentByProviderId/${providerid}/${currentDate}`;
          console.log(apiUrlProviders);
          const speechutterance = new SpeechSynthesisUtterance();

          fetch(apiUrlProviders, {
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

              if (integerValue > 10) {
                speechutterance.text = `The Value is: ${integerValue}`;
              } else {
                speechutterance.text = `The Value is: ${integerValue}`;
              }
              updateSpeechUtterance(speechutterance, integerValue);
              speechSynthesis.speak(speechutterance);
            })
            .catch((error) => {
              console.error("There was an error with this request:", error);
            });
        }
      });
  };
  const callApiAndGetInteger5 = () => {
    const speechUtterance = new SpeechSynthesisUtterance();
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
        const nameToFind = "JACQUELYN RUSH";
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            console.log(arrayFromJSON[key]);
            if (obj[key] === valueToFind) {
              return key;
            }
          }
          return null;
        };

        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        console.log(providerid);

        console.log(`This is a provider id ${providerid}`);
        if (providerid) {
          console.log(providerid);
          const currentDate = getFormattedDate();
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/${providerid}/${currentDate}`;
          console.log(apiUrlProviders);

          fetch(apiUrlProviders, {
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

              if (integerValue > 10) {
                speechUtterance.text = `The Value is: ${integerValue}`;
              } else {
                speechUtterance.text = `The Value is: ${integerValue}`;
              }
              updateSpeechUtterance5(speechUtterance, integerValue);
              speechSynthesis.speak(speechUtterance);
            })
            .catch((error) => {
              console.error("There was an error with this request:", error);
            });
        }
      });
  };
  const callApiAndGetInteger6 = () => {
    const speechUtterance = new SpeechSynthesisUtterance();
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
        const nameToFind = "Jahid Niaz";
        const findKeyByValue = (obj, valueToFind) => {
          for (let key in obj) {
            console.log(arrayFromJSON[key]);
            if (obj[key] === valueToFind) {
              return key;
            }
          }
          return null;
        };
        const providerid = findKeyByValue(arrayFromJSON, nameToFind);
        console.log(providerid);
        console.log(`This is a provider id ${providerid}`);
        if (providerid) {
          console.log(providerid);
          const currentDate = getFormattedDate();
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfNoShowAppointment/${providerid}/${currentDate}`;
          console.log(apiUrlProviders);
          fetch(apiUrlProviders, {
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

              if (integerValue > 10) {
                speechUtterance.text = `The Value is: ${integerValue}`;
              } else {
                speechUtterance.text = `The Value is: ${integerValue}`;
              }
              updateSpeechUtterance6(speechUtterance, integerValue);
              speechSynthesis.speak(speechUtterance);
            })
            .catch((error) => {
              console.error("There was an error with this request:", error);
            });
        }
      });
  };
  const handleSpeak = (word, voiceIndex = 0) => {
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
      if (
        word.toLowerCase().includes("page") &&
        word.toLowerCase().includes("ap")
      ) {
        speechutterance.text = "The cancelled appointment is 0";
      } else if (
        word.toLowerCase().includes("appointment") &&
        word.toLowerCase().includes("clinic")
      ) {
        callApiAndGetInteger0();
        ////////
      } else if (
        word.toLowerCase().includes("today") &&
        word.toLowerCase().includes("reschedule")
      ) {
        callApiAndGetInteger1();
      } else if (
        word.toLowerCase().includes("vb") &&
        word.toLowerCase().includes("raj")
      ) {
        callApiAndGetInteger();
      } else if (
        word.toLowerCase().includes("no") &&
        word.toLowerCase().includes("show")&&word.toLowerCase().includes("appointment")
      ) {
        callApiAndGetInteger3();////////
      } else if (
        word.toLowerCase().includes("cancelled") &&
        word.toLowerCase().includes("today")
      ) {
        callApiAndGetInteger4();
      } else if (
        word.toLowerCase().includes("reschedule") &&
        word.toLowerCase().includes("rush")
      ) {
        callApiAndGetInteger5();
      } else if (
        word.toLowerCase().includes("jahid") && word.toLowerCase().includes("niaz")
      ) {
        callApiAndGetInteger6();
      } else if (
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
