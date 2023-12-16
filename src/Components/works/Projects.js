import reactpoll from "../../Assets/reactpoll.png";
import audio from "../../Assets/audio.png";
import chit from "../../Assets/chit.jpg";
import animal from "../../Assets/animal.png";
import ticket from "../../Assets/ticket.png";
import depress from "../../Assets/depress.png"
import shopit from "../../Assets/shopit.png";
const Project = [
  
  {
      title: "ShopIt",
      image:shopit,
      content: "Facilitating users’ logins to websites as a Seller or Buyer.Sellers can add Products with details and images. Buyers or users can browse through different categories of projects and add them to cart. ",
      tech:"NextJs, Material UI, Node.js, Express.js, MongoDB",
      live:"https://shop-it-ten.vercel.app",
      github:"https://github.com/vishalkumar437/shopit"
    },
    {
      title: "ReactPoll",
      image:reactpoll,
      content: "WebApp for polling for surveys Facilitating users logins to websites without having to remember their credentials Users can create, vote, share",
      tech:"Reactjs, CSS, Node.js, Express.js, MongoDB",
      live:"https://reactpolldv.netlify.app",
      github:"https://github.com/vishalkumar437/reactPollBackend"
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
      title: "Railway Ticket Confirmation",
      image: ticket,
      content: "Using Machine learning models this project can predict if a railway ticket will get confirm or not. If it will what is the probability.",
      github:"https://github.com/vishalkumar437/ticketPrediction",
      tech:"Python, Pandas, tensorflow, keras, Flask",
    },
    {
      title: "Depression Chatbot",
      image:depress,
      content: "Depression Chatbot using machine learning and natural language Processing",
      github:"https://github.com/vishalkumar437/depress",
      tech:"Python, nltk, tensorflow, FLask"
    },
    // Add more objects as needed
  ];

  export default Project;
