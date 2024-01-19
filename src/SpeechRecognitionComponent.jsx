import React, { useState } from "react";
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
    const updatedText = `The total clinic appointments are ${integerValue}`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;

    // Set the response in the state
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
    const updatedText = `The reschedule appointments are ${integerValue}`;
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
    const updatedText = `The total cancelled appointments are ${integerValue}`;
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
    const updatedText = `The no show appointments are ${integerValue}`;
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
    const updatedText = `The canceled appointments are ${integerValue}`;
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
    const updatedText = `The reschedule appointments are ${integerValue}`;
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
    const updatedText = `The no show appointments are ${integerValue}`;
    // const updatedText = integerValue;
    speechutterance.text = updatedText;

    // Set the response in the state
    setResp(updatedText);
  };
  const callApiAndGetInteger0 = () => {
    const speechutterance = new SpeechSynthesisUtterance();
    const apiUrl =
      "http://52.14.102.183:8096/reporting/getCountOfAppointment/2024-01-12";

    // Replace 'YOUR_AUTH_TOKEN' with your actual authentication token
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

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
    const apiUrl = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/2024-01-12`;

    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

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

    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

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

    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

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
    const apiUrl =
      "http://52.14.102.183:8096/reporting/getCountOfAppointment/2024-01-12";

    // Replace 'YOUR_AUTH_TOKEN' with your actual authentication token
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

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
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

    // Fetch providers map
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
          const currentDate = new Date();
          const day = currentDate.getDate();
          console.log(day);
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfCancelledAppointmentByProviderId/${providerid}/`;
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
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

    // Fetch providers map
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
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfRescheduledAppointment/${providerid}/2024-01-12`;
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
    const authToken =
      "eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQWRtaW4ifV0sInN1YiI6ImRlbW9BZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDQ5NjY5OTEsImV4cCI6MTcwNDk3NDE5MX0.eQ_jW9aO1t2wHZCOHA1hxRykKdtUBsruo1GluQB-ii4bgJFOjhDmCOS1IfHoh5TEPvxzlJzR6Tuy0qlwhANXEA";

    // Fetch providers map
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
          const apiUrlProviders = `http://52.14.102.183:8096/reporting/getCountOfNoShowAppointment/${providerid}/2024-01-12`;
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
        word.toLowerCase().includes("show")
      ) {
        callApiAndGetInteger3();
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
        word.toLowerCase().includes("no") &&
        word.toLowerCase().includes("show") &&
        word.toLowerCase().includes("niaz")
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

  // const startListening = () => {
  //   let recognition = null;
  //   if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  //       recognition = new (window.SpeechRecognition ||
  //       window.webkitSpeechRecognition)();
  //       recognition.onresult = (event) => {
  //       const recognizedTranscript = event.results[0][0].transcript;
  //       setTranscript(recognizedTranscript);
  //       let voiceIndex =2 ;
  //       handleSpeak(recognizedTranscript, voiceIndex);
  //     };
  //   }
  //    else {
  //     console.log("Speech recognition not supported in this browser.");
  //   }
  //   if (recognition) {
  //     recognition.start();
  //   }
  // };
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
