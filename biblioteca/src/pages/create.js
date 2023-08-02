import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
    }
  }
  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
      setCover(reader.result.toString());
    }
  }

  function handleSubmit(e){
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review
    };

    //TODO:
    store.createItem(newBook);
    navigate('/')
  }

  const inputStyles = {
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Title</div>
          <input
            style={inputStyles.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Author</div>
          <input
            style={inputStyles.input}
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>intro</div>
          <input
            style={inputStyles.input}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Completed</div>
          <input
            style={inputStyles.input}
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>review</div>
          <input
            style={inputStyles.input}
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input
          type="submit"
          value="Register book"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeigth: "bolder",
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}
