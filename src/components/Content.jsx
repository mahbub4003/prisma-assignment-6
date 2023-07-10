const Content = () => {
  const addText = (e) => {
    e.preventDefault();
    const value = e.target.textarea.value;

    document.getElementById("p").innerHTML = value;

    e.target.reset();
    console.log(value);
  };

  return (
    <div className="content">
      <form onSubmit={addText}>
        <textarea
          id="textarea"
          defaultValue={""}
          name="textarea"
          rows="10"
          cols="60"
        ></textarea>
        <button className="button">Add Text</button>
      </form>
      <p id="p"></p>
    </div>
  );
};

export default Content;
