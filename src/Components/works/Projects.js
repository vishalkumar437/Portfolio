import reactpoll from "../../Assets/reactpoll.png";
import audio from "../../Assets/audio.png";
import chit from "../../Assets/chit.jpg";
import animal from "../../Assets/animal.png"
const Project = [
    {
      title: "ReactPoll",
      image:reactpoll,
      content: "WebApp for polling for surveys Facilitating users logins to websites without having to remember their credentials Users can create, vote, share",
      tech:"Reactjs, CSS, Node.js, Express.js, MongoDB",
      live:"https://reactpolldv.netlify.app",
      github:"https://github.com/vishalkumar437/reactpoll"
    },
    {
      title: "ChitChat",
      image:chit,
      content: "Android Application for chat. Used Firebase Authentication(SDK) to facilitate authentication & Cloud Firestore to store data.",
      tech:"Android Studio, Firebase, Java, XML.",
      github:"https://github.com/vishalkumar437/ChitChat"
    },
    {
      title: "Audio Classification",
      image: audio, 
      content: "Audio Classifying model for Urban8KSound Dataset for classifying audio using CNN",
      tech:" Python , tensorflow, CNN, librosa",
      github: "https://github.com/vishalkumar437/audioclassify"
    },
    {
      title: "Animal Detection",
      image: animal,
      tech:" Python , YOLO, OPENCV, tKinter",
      content: "We have used YOLOv3 Algorithm to track animals that have infiltrated farm and vandalizing crop and also inform farmer if animals are detected and provide necessary actions to scare away animals.",
      github:"https://github.com/vishalkumar437/ObjectDetection"
    },
    {
      title: "Card Title 4",
      content: "Some quick example text for Card 2.",
    },
    {
      title: "Card Title 5",
      content: "Some quick example text for Card 2.",
    },
    // Add more objects as needed
  ];

  export default Project;